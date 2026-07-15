import "./DeadlineList.css";
import DeadlineSection from "../DeadlineSection/DeadlineSection";

function DeadlineList({ tasks, onToggle }) {
  // Kelompokkan task berdasarkan tanggal
  const grouped = tasks.reduce((acc, task) => {
    if (!acc[task.deadline]) {
      acc[task.deadline] = [];
    }

    acc[task.deadline].push(task);

    return acc;
  }, {});

  return (
    <section className="deadline-container">
      {Object.entries(grouped).map(([date, tasks]) => (
        <DeadlineSection
          key={date}
          date={date}
          tasks={tasks}
          onToggle={onToggle}
        />
      ))}
    </section>
  );
}

export default DeadlineList;