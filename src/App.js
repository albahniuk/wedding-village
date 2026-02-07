import { useState } from 'react';
import Village from './components/Village';
import WelcomeScreen from './components/WelcomeScreen';
import './App.css';

function App() {
  const [started, setStarted] = useState(false);
  const [fading, setFading] = useState(false);

  const handleStart = () => {
    setFading(true);
    setTimeout(() => setStarted(true), 600);
  };

  return (
    <>
      <Village />
      {!started && <WelcomeScreen onStart={handleStart} fading={fading} />}
    </>
  );
}

export default App;
