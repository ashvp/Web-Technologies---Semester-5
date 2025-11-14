// TimeSetter Component
function TimeSetter({
  hours,
  minutes,
  seconds,
  onTimeChange,
  disabled,
}) {
  const handleInputChange = (type, value) => {
    const numValue = Math.max(0, parseInt(value) || 0);
    onTimeChange(type, numValue);
  };

  return (
    <div className="time-setter">
      <h3 className="title">Set Timer</h3>
      <div className="input-group">
        <div className="input-field">
          <label className="label">Hours:</label>
          <input
            type="number"
            min="0"
            max="23"
            value={hours}
            onChange={(e) => handleInputChange("hours", e.target.value)}
            disabled={disabled}
            className="input"
          />
        </div>
        <div className="input-field">
          <label className="label">Minutes:</label>
          <input
            type="number"
            min="0"
            max="59"
            value={minutes}
            onChange={(e) => handleInputChange("minutes", e.target.value)}
            disabled={disabled}
            className="input"
          />
        </div>
        <div className="input-field">
          <label className="label">Seconds:</label>
          <input
            type="number"
            min="0"
            max="59"
            value={seconds}
            onChange={(e) => handleInputChange("seconds", e.target.value)}
            disabled={disabled}
            className="input"
          />
        </div>
      </div>
    </div>
  );
}

export default TimeSetter;
