// ControlButtons Component
function ControlButtons({
  isActive,
  onStart,
  onStop,
  onReset,
  hasTime,
}) {
  return (
    <div className="control-buttons">
      {!isActive ? (
        <button
          onClick={onStart}
          disabled={!hasTime}
          className={`button start-button ${!hasTime ? "disabled-button" : ""}`}>
          Start
        </button>
      ) : (
        <button
          onClick={onStop}
          className="button stop-button">
          Stop
        </button>
      )}
      <button
        onClick={onReset}
        className="button reset-button">
        Reset
      </button>
    </div>
  );
}

export default ControlButtons;
