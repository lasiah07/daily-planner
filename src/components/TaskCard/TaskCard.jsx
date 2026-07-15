import "./TaskCard.css";
import {
  RiCheckboxCircleFill,
  RiCheckboxBlankCircleLine,
} from "react-icons/ri";

function TaskCard({
  id,
  title,
  completed,
  onToggle,
}) {
  return (
    <div
      className={`task-card ${
        completed ? "completed-card" : ""
      }`}
    >
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

      <span
        className={`task-title ${
          completed ? "completed" : ""
        }`}
      >
        {title}
      </span>
    </div>
  );
}

export default TaskCard;