import "./DeadlineList.css";
import DeadlineSection from "../DeadlineSection/DeadlineSection";

function DeadlineList({
  tasks,
  onToggle,
}) {
  const grouped = tasks.reduce((acc, task) => {
    if (!acc[task.deadline]) {
      acc[task.deadline] = [];
    }

    acc[task.deadline].push(task);

    return acc;
  }, {});

  return (
    <section className="deadline-container">
      <h2>Upcoming Deadline</h2>

      {Object.keys(grouped).length === 0 ? (
        <p className="empty-deadline">
          Belum ada deadline.
        </p>
      ) : (
        Object.entries(grouped).map(
          ([date, tasks]) => (
            <DeadlineSection
              key={date}
              date={date}
              tasks={tasks}
              onToggle={onToggle}
            />
          )
        )
      )}
    </section>
  );
}

export default DeadlineList;