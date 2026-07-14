import "./TaskList.css";
import TaskCard from "../TaskCard/TaskCard";

function TaskList({ tasks }) {
  return (
    <section className="task-list">

      <div className="task-header">
        <h2>Today's Tasks</h2>
        <button>See All</button>
      </div>

      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          title={task.title}
          completed={task.completed}
        />
      ))}

    </section>
  );
}

export default TaskList;