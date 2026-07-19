import "./Routine.css";

function Routine() {
  const days = Array.from({ length: 35 });

  return (
    <div className="routine-page">
      <h1>Routine Tracker</h1>

      <p className="routine-subtitle">
        Build consistency one day at a time.
      </p>

      <div className="month-card">
        <div className="month-header">
          <h3>July 2026</h3>
        </div>

        <div className="routine-grid">
          {days.map((_, index) => (
            <div
              key={index}
              className={`routine-box ${
                index % 5 === 0
                  ? "routine-completed"
                  : index % 3 === 0
                  ? "routine-partial"
                  : "routine-empty"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Routine;