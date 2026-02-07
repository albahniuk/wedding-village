import "./WelcomeScreen.css";

function WelcomeScreen({ onStart, fading }) {
  return (
    <div
      className={`welcome-overlay${fading ? " welcome-overlay--fading" : ""}`}
    >
      <div className="welcome">
        <h1 className="welcome__title">Alba & Álvaro</h1>
        <p className="welcome__instructions">
          Explora el pueblo y haz click en las casas para descubrir toda la
          información
        </p>
        <button className="welcome__button" onClick={onStart}>
          Comenzar
        </button>
      </div>
    </div>
  );
}

export default WelcomeScreen;
