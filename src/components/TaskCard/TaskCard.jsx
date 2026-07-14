import "./TaskCard.css";
import {
  RiCheckboxCircleFill,
  RiCheckboxBlankCircleLine,
} from "react-icons/ri";

function TaskCard({
  id,
  title,
  category,
  priority,
  completed,
  onToggle,
}) {
  return (
    <div className="task-card">
      <button
        className="task-check"
        onClick={() => onToggle(id)}
      >
        {completed ? (
          <RiCheckboxCircleFill className="checked" />
        ) : (
          <RiCheckboxBlankCircleLine className="unchecked" />
        )}
      </button>

      <div className="task-content">
        <span className={completed ? "completed" : ""}>
          {title}
        </span>

        <div className="task-info">
          <span className="category-badge">
            📚 {category || "Belajar"}
          </span>

          <span className={`priority-badge ${priority?.toLowerCase()}`}>
            {priority || "Low"}
          </span>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;