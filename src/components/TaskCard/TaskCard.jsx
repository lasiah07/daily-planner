import "./TaskCard.css";
import { RiCheckboxCircleFill, RiCheckboxBlankCircleLine } from "react-icons/ri";

function TaskCard({ title, completed }) {
  return (
    <div className="task-card">
      <button className="task-check">
        {completed ? (
          <RiCheckboxCircleFill className="checked" />
        ) : (
          <RiCheckboxBlankCircleLine className="unchecked" />
        )}
      </button>

      <span className={completed ? "completed" : ""}>
        {title}
      </span>
    </div>
  );
}

export default TaskCard;