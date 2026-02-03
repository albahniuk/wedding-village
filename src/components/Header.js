import { useState, useEffect } from "react";
import "./Header.css";

const WEDDING_DATE = new Date("2026-11-07T00:00:00");

function getTimeLeft() {
  const now = new Date();
  const diff = WEDDING_DATE - now;
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function pad(n) {
  return String(n).padStart(2, "0");
}

function Header() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft);

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="header">
      <div className="header__player header__player--left">
        <span className="header__player-label">Álvaro</span>
        <span className="header__player-label">PLAYER 1</span>
        <img
          src={`${process.env.PUBLIC_URL}/assets/player1.png`}
          alt="Player 1"
          className="header__player-img"
          draggable={false}
        />
      </div>

      <div className="header__countdown">
        <img
          src={`${process.env.PUBLIC_URL}/assets/date-calendar.png`}
          alt="Calendar"
          className="header__calendar-img"
          draggable={false}
        />
        <div className="header__countdown-text">
          <div className="header__date">07 NOV 2026</div>
          <div className="header__timer">
            DAYS: {timeLeft.days}, {pad(timeLeft.hours)}:{pad(timeLeft.minutes)}
            :{pad(timeLeft.seconds)}
          </div>
        </div>
      </div>

      <div className="header__player header__player--right">
        <span className="header__player-label">Alba</span>
        <span className="header__player-label">PLAYER 2</span>
        <img
          src={`${process.env.PUBLIC_URL}/assets/player2.png`}
          alt="Player 2"
          className="header__player-img"
          draggable={false}
        />
      </div>
    </div>
  );
}

export default Header;
