// TimerDisplay Component
function TimerDisplay({
  hours,
  minutes,
  seconds,
  isActive,
  isFinished,
}) {
  const formatTime = (time) => time.toString().padStart(2, "0");

  const timerDisplayClasses = [
    "timer-display",
    isActive ? "active" : "",
    isFinished ? "finished" : "",
  ].join(" ");

  return (
    <div className={timerDisplayClasses}>
      <div className="time-text">
        {formatTime(hours)}:{formatTime(minutes)}:{formatTime(seconds)}
      </div>
      {isFinished && <div className="finished-text">Time's Up!</div>}
    </div>
  );
}

export default TimerDisplay;
