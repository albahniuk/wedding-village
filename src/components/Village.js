import { useState, useRef, useCallback, useEffect } from "react";
import Cat from "./Cat";
import Header from "./Header";
import Popup from "./Popup";
import houses from "../data/houses";
import decorations from "../data/decorations";
import { getWaypoints, getRoadPosition } from "../data/paths";
import useBreakpoint from "../hooks/useBreakpoint";
import "./Village.css";

const CAT_SPEED = 0.3;

const BG_IMAGES = {
  mobile: "background-mobile.png",
  tablet: "background-mobile.png",
  desktop: "background-desktop.png",
};

// Native aspect ratios of each background image
const BG_RATIOS = {
  mobile: 1152 / 2048, // 9:16
  tablet: 1152 / 2048, // 9:16 (same as mobile)
  desktop: 2048 / 1152, // 16:9
};

// Calculate the rendered image area when using background-size: cover
function getCoverRect(viewW, viewH, imgRatio) {
  const viewRatio = viewW / viewH;
  let width, height;
  if (viewRatio > imgRatio) {
    // viewport is wider than image — image scaled by width, overflows vertically
    width = viewW;
    height = viewW / imgRatio;
  } else {
    // viewport is taller than image — image scaled by height, overflows horizontally
    height = viewH;
    width = viewH * imgRatio;
  }
  // centered
  const left = (viewW - width) / 2;
  const top = (viewH - height) / 2;
  return { left, top, width, height };
}

function Village() {
  const breakpoint = useBreakpoint();
  const initialRoadPos = getRoadPosition("terraria", breakpoint);

  const [catPos, setCatPos] = useState({
    x: initialRoadPos.x,
    y: initialRoadPos.y,
  });
  const [catDirection, setCatDirection] = useState("down");
  const [isWalking, setIsWalking] = useState(false);
  const [spriteFrame, setSpriteFrame] = useState(0);
  const [currentHouse, setCurrentHouse] = useState(null);
  const [popupContent, setPopupContent] = useState(null);
  const [layerStyle, setLayerStyle] = useState({});
  const [isPlaying, setIsPlaying] = useState(false);
  const [showBill, setShowBill] = useState(false);
  const villageRef = useRef(null);
  const audioRef = useRef(null);
  const animRef = useRef(null);
  const frameCountRef = useRef(0);

  // Recalculate cover rect on resize or breakpoint change
  useEffect(() => {
    function updateLayer() {
      const el = villageRef.current;
      if (!el) return;
      const rect = getCoverRect(
        el.clientWidth,
        el.clientHeight,
        BG_RATIOS[breakpoint] || BG_RATIOS.tablet,
      );
      setLayerStyle({
        left: `${rect.left}px`,
        top: `${rect.top}px`,
        width: `${rect.width}px`,
        height: `${rect.height}px`,
      });
    }
    updateLayer();
    window.addEventListener("resize", updateLayer);
    return () => window.removeEventListener("resize", updateLayer);
  }, [breakpoint]);

  const stopWalking = useCallback(() => {
    if (animRef.current) {
      cancelAnimationFrame(animRef.current);
      animRef.current = null;
    }
    setIsWalking(false);
  }, []);

  const walkTo = useCallback(
    (houseId) => {
      const house = houses.find((h) => h.id === houseId);
      if (!house) return;

      setPopupContent(null);
      stopWalking();

      const fromId = currentHouse || "terraria";
      const waypoints = getWaypoints(fromId, houseId, houses, breakpoint);

      if (waypoints.length < 2) {
        setPopupContent(house.popupContent);
        return;
      }

      setIsWalking(true);
      let wpIndex = 0;
      let currentX = waypoints[0].x;
      let currentY = waypoints[0].y;
      frameCountRef.current = 0;

      const animate = () => {
        const target = waypoints[wpIndex + 1];
        if (!target) {
          setIsWalking(false);
          setCurrentHouse(houseId);
          setCatDirection("down");
          setPopupContent(house.popupContent);
          return;
        }

        const dx = target.x - currentX;
        const dy = target.y - currentY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < CAT_SPEED) {
          currentX = target.x;
          currentY = target.y;
          wpIndex++;
        } else {
          currentX += (dx / dist) * CAT_SPEED;
          currentY += (dy / dist) * CAT_SPEED;
        }

        const absDx = Math.abs(dx);
        const absDy = Math.abs(dy);
        let dir;
        if (absDx > absDy) {
          dir = dx > 0 ? "right" : "left";
        } else {
          dir = dy > 0 ? "down" : "back";
        }
        setCatDirection(dir);

        frameCountRef.current++;
        if (frameCountRef.current % 8 === 0) {
          setSpriteFrame((f) => f + 1);
        }

        setCatPos({ x: currentX, y: currentY });
        animRef.current = requestAnimationFrame(animate);
      };

      animRef.current = requestAnimationFrame(animate);
    },
    [currentHouse, stopWalking, breakpoint],
  );

  useEffect(() => {
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, []);

  // When breakpoint changes, reposition cat to road position near current house
  useEffect(() => {
    const houseId = currentHouse || "terraria";
    const roadPos = getRoadPosition(houseId, breakpoint);
    setCatPos({ x: roadPos.x, y: roadPos.y });
  }, [breakpoint, currentHouse]);

  const toggleMusic = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  }, []);

  const bgImage = BG_IMAGES[breakpoint] || BG_IMAGES.tablet;

  return (
    <div
      ref={villageRef}
      className="village"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/${bgImage})`,
      }}
    >
      <Header />
      <div className="village__layer" style={layerStyle}>
        {decorations.map((deco) => {
          const pos = deco[breakpoint] || deco.tablet;
          const isEasterEgg = deco.id === "gravity-falls";
          return (
            <div
              key={deco.id}
              className={`village__decoration${isEasterEgg ? " village__decoration--clickable" : ""}`}
              style={{
                left: `${pos.x}%`,
                top: `${pos.y}%`,
                width: `${pos.width}%`,
                height: `${pos.height}%`,
              }}
              onClick={isEasterEgg ? () => setShowBill(true) : undefined}
            >
              <img
                src={`${process.env.PUBLIC_URL}/assets/${deco.image}`}
                alt={deco.alt}
                className="village__decoration-img"
                draggable={false}
              />
            </div>
          );
        })}

        {houses.map((house) => {
          const pos = house[breakpoint] || house.tablet;
          return (
            <div
              key={house.id}
              className="village__house"
              style={{
                left: `${pos.x}%`,
                top: `${pos.y}%`,
                width: `${pos.width}%`,
                height: `${pos.height}%`,
              }}
              onClick={() => walkTo(house.id)}
              title={house.name}
            >
              <img
                src={`${process.env.PUBLIC_URL}/assets/${house.image}`}
                alt={house.name}
                className="village__house-img"
                draggable={false}
              />
            </div>
          );
        })}

        <Cat
          x={catPos.x}
          y={catPos.y}
          direction={catDirection}
          isWalking={isWalking}
          frame={spriteFrame}
        />
      </div>

      <Popup content={popupContent} onClose={() => setPopupContent(null)} />

      {showBill && (
        <div className="bill-overlay" onClick={() => setShowBill(false)}>
          <img
            src={`${process.env.PUBLIC_URL}/assets/bill.gif`}
            alt="Bill Cipher"
            className="bill-overlay__img"
          />
        </div>
      )}

      <audio
        ref={audioRef}
        src={`${process.env.PUBLIC_URL}/assets/stardew-valley.mp3`}
        loop
      />
      <button
        className="music-toggle"
        onClick={toggleMusic}
        title={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? "\u266B" : "\u266A"}
      </button>
    </div>
  );
}

export default Village;
