import { useState } from "react";
import "./Home.css";

import GreetingCard from "../../components/GreetingCard/GreetingCard";
import ProgressCard from "../../components/ProgressCard/ProgressCard";
import TaskList from "../../components/TaskList/TaskList";
import FloatingButton from "../../components/FloatingButton/FloatingButton";
import AddTaskModal from "../../components/AddTaskModal/AddTaskModal";
import BottomNavigation from "../../components/BottomNavigation/BottomNavigation";

import { user, tasks } from "../../data/dummyData";

function Home() {
  const [taskList, setTaskList] = useState(tasks);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleTask = (id) => {
    setTaskList(
      taskList.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const completedTasks = taskList.filter(
    (task) => task.completed
  ).length;

  const totalTasks = taskList.length;

  return (
    <div className="home">
      <GreetingCard
        name={user.name}
        quote={user.quote}
      />

      <ProgressCard
        completed={completedTasks}
        total={totalTasks}
      />

      <TaskList
        tasks={taskList}
        onToggle={toggleTask}
      />

      <FloatingButton
        onClick={() => setIsModalOpen(true)}
      />

      <AddTaskModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <BottomNavigation />
    </div>
  );
}

export default Home;