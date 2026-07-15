import "./TaskCard.css";
import {
  RiCheckboxCircleFill,
  RiCheckboxBlankCircleLine,
} from "react-icons/ri";

import TaskMenu from "../TaskMenu/TaskMenu";

function TaskCard({
  id,
  title,
  completed,
  onToggle,
  onDelete,
  onEdit,
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

      <TaskMenu
        onEdit={() => onEdit(id)}
        onDelete={() => onDelete(id)}
      />
    </div>
  );
}

export default TaskCard;