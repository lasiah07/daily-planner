import "./TaskList.css";
import TaskCard from "../TaskCard/TaskCard";

function TaskList({
  tasks,
  onToggle,
  onDelete,
  onEdit,
}) {
  return (
    <section className="task-list">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          id={task.id}
          title={task.title}
          completed={task.completed}
          category={task.category}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </section>
  );
}

export default TaskList;