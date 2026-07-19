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

const activeDays = new Set();

routineTasks.forEach((task) => {
  (task.history || []).forEach((date) => {
    activeDays.add(date);
  });
});

const totalCompleted = activeDays.size;
const totalHistory = routineTasks.reduce(
  (total, task) =>
    total + (task.history?.length || 0),
  0
);

const averageCompletion =
  routineTasks.length === 0
    ? 0
    : Math.round(
        (totalHistory /
          (routineTasks.length * 30)) *
          100
      );
let currentStreak = 0;

for (let i = heatmapDays.length - 1; i >= 0; i--) {
  if (heatmapDays[i].completed > 0) {
    currentStreak++;
  } else {
    break;
  }
}

let bestStreak = 0;
let streak = 0;

heatmapDays.forEach((day) => {
  if (day.completed > 0) {
    streak++;

    if (streak > bestStreak) {
      bestStreak = streak;
    }
  } else {
    streak = 0;
  }
});

  return (
    <div className="routine-page">
      <h1>Routine Tracker</h1>

      <p className="routine-subtitle">
        Build consistency one day at a time.
      </p>
<div className="stats-grid">

  <div className="stat-card">
    <h2>{currentStreak}</h2>
    <p>Current Streak</p>
  </div>

  <div className="stat-card">
    <h2>{bestStreak}</h2>
    <p>Best Streak</p>
  </div>

  <div className="stat-card">
    <h2>{routineTasks.length}</h2>
    <p>Routine</p>
  </div>

  <div className="stat-card">
    <h2>{totalCompleted}</h2>
    <p>Active Days</p>
  </div>

</div>

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