import "./TaskList.css";
import TaskCard from "../TaskCard/TaskCard";

function TaskList({ tasks, onToggle }) {
  return (
    <section className="task-list">

      <div className="task-header">

        <h2>Today's Plan</h2>

      </div>

      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          id={task.id}
          title={task.title}
          completed={task.completed}
          onToggle={onToggle}
        />
      ))}

    </section>
  );
}

export default TaskList;