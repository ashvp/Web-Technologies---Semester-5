import { useState, useEffect } from "react";
import Title from "./Title";
import ControlButtons from "./ControlButtons";
import TimerDisplay from "./TimerDisplay";
import TimeSetter from "./TimeSetter";
// import "./App.css";

// Main App Component
function App() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(5);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 5,
    seconds: 0,
  });

  // Calculate if there's any time set
  const hasTime = hours > 0 || minutes > 0 || seconds > 0;
  const isFinished =
    timeLeft.hours === 0 &&
    timeLeft.minutes === 0 &&
    timeLeft.seconds === 0 &&
    isActive;

  // Handle time changes from TimeSetter
  const handleTimeChange = (type, value) => {
    if (!isActive) {
      switch (type) {
        case "hours":
          setHours(value);
          setTimeLeft((prev) => ({ ...prev, hours: value }));
          break;
        case "minutes":
          setMinutes(value);
          setTimeLeft((prev) => ({ ...prev, minutes: value }));
          break;
        case "seconds":
          setSeconds(value);
          setTimeLeft((prev) => ({ ...prev, seconds: value }));
          break;
      }
    }
  };

  // Start timer
  const handleStart = () => {
    if (hasTime) {
      setIsActive(true);
      setTimeLeft({ hours, minutes, seconds });
    }
  };

  // Stop timer
  const handleStop = () => {
    setIsActive(false);
  };

  // Reset timer
  const handleReset = () => {
    setIsActive(false);
    setTimeLeft({ hours, minutes, seconds });
  };

  // Timer countdown effect
  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => {
          const { hours: h, minutes: m, seconds: s } = prevTime;

          if (h === 0 && m === 0 && s === 0) {
            setIsActive(false);
            return prevTime;
          }

          if (s > 0) {
            return { ...prevTime, seconds: s - 1 };
          } else if (m > 0) {
            return { ...prevTime, minutes: m - 1, seconds: 59 };
          } else if (h > 0) {
            return { ...prevTime, hours: h - 1, minutes: 59, seconds: 59 };
          }

          return prevTime;
        });
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive]);

  return (
    <div className="app">
      <div className="container">
        <Title text="Countdown Timer" />

        <TimeSetter
          hours={hours}
          minutes={minutes}
          seconds={seconds}
          onTimeChange={handleTimeChange}
          disabled={isActive}
        />

        <TimerDisplay
          hours={timeLeft.hours}
          minutes={timeLeft.minutes}
          seconds={timeLeft.seconds}
          isActive={isActive}
          isFinished={isFinished}
        />

        <ControlButtons
          isActive={isActive}
          onStart={handleStart}
          onStop={handleStop}
          onReset={handleReset}
          hasTime={hasTime}
        />
      </div>
    </div>
  );
}

export default App;
