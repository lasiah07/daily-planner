import "./Routine.css";
import { useTasks } from "../../context/TaskContext";

function Routine() {
  const { tasks } = useTasks();

  const routineTasks = tasks.filter(
    (task) => task.type === "routine"
  );

  const completedRoutine = routineTasks.filter(
    (task) => task.completed
  ).length;

  const completionRate =
    routineTasks.length === 0
      ? 0
      : Math.round(
          (completedRoutine / routineTasks.length) *
            100
        );

const heatmapDays = [];

for (let i = 29; i >= 0; i--) {
  const date = new Date();

  date.setDate(date.getDate() - i);

  const dateString = date
    .toISOString()
    .split("T")[0];

  let completed = 0;

  routineTasks.forEach((task) => {
    if (
      task.history &&
      task.history.includes(dateString)
    ) {
      completed++;
    }
  });

  heatmapDays.push({
    date: dateString,
    completed,
  });
}

  return (
    <div className="routine-page">
      <h1>Routine Tracker</h1>

      <p className="routine-subtitle">
        Build consistency one day at a time.
      </p>

    <div className="month-card">

  <div className="month-header">
    <h3>Last 30 Days</h3>

    <p className="heatmap-caption">
      Activity History
    </p>
  </div>

  <div className="heatmap-grid">

    {heatmapDays.map((day) => (

      <div
        key={day.date}
        className={`heat-box
          ${
            day.completed === 0
              ? "level-0"
              : day.completed === 1
              ? "level-1"
              : day.completed === 2
              ? "level-2"
              : "level-3"
          }`}
        title={day.date}
      />

    ))}

  </div>

</div>

      <div className="month-card">

        <div className="month-header">
          <h3>Today's Progress</h3>

          <span>
            {completedRoutine}/{routineTasks.length}
          </span>
        </div>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{
              width: `${completionRate}%`,
            }}
          />
        </div>

        <p className="progress-text">
          {completionRate}% Completed
        </p>

      </div>

      <div className="month-card">

        <div className="month-header">
          <h3>Today's Routine</h3>
        </div>

        {routineTasks.length === 0 ? (
          <p className="routine-empty-text">
            Belum ada routine.
          </p>
        ) : (
          <div className="routine-list">

            {routineTasks.map((task) => (
              <div
                key={task.id}
                className="routine-item"
              >
                <span>
                  {task.completed ? "✓" : "○"}
                </span>

                <p>{task.title}</p>
              </div>
            ))}

          </div>
        )}

      </div>
    </div>
  );
}

export default Routine;