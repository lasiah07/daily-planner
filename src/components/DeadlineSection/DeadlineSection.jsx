import "./DeadlineSection.css";
import {
  RiCalendarEventLine,
  RiCheckboxCircleFill,
  RiCheckboxBlankCircleLine,
} from "react-icons/ri";

function DeadlineSection({
  date,
  tasks,
  onToggle,
}) {
  const formattedDate = new Date(date).toLocaleDateString(
    "id-ID",
    {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    }
  );

  return (
    <section className="deadline-section">
      <div className="deadline-header">
        <RiCalendarEventLine className="calendar-icon" />
        <h3>{formattedDate}</h3>
      </div>

      <div className="deadline-list">
        {tasks.map((task) => (
          <div
            key={task.id}
            className={`deadline-item ${
              task.completed ? "deadline-completed" : ""
            }`}
          >
            <button
              className="deadline-check"
              onClick={() => onToggle(task.id)}
            >
              {task.completed ? (
                <RiCheckboxCircleFill className="checked" />
              ) : (
                <RiCheckboxBlankCircleLine className="unchecked" />
              )}
            </button>

            <span
              className={
                task.completed
                  ? "deadline-title completed"
                  : "deadline-title"
              }
            >
              {task.title}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default DeadlineSection;