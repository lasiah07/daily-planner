import "./ProgressCard.css";

function ProgressCard({ completed, total }) {
  const percentage = Math.round((completed / total) * 100);

  return (
    <div className="progress-card">

      <div className="progress-header">
        <h3>Today's Progress</h3>
        <span>{percentage}%</span>
      </div>

      <div className="progress-bar">

        <div
          className="progress-fill"
          style={{ width: `${percentage}%` }}
        ></div>

      </div>

      <p>
        {completed} of {total} tasks completed
      </p>

    </div>
  );
}

export default ProgressCard;