import { useState, useEffect } from "react";
import "./Home.css";

import GreetingCard from "../../components/GreetingCard/GreetingCard";
import ProgressCard from "../../components/ProgressCard/ProgressCard";
import TaskList from "../../components/TaskList/TaskList";
import BottomNavigation from "../../components/BottomNavigation/BottomNavigation";
import AddTaskModal from "../../components/AddTaskModal/AddTaskModal";

import { user, tasks } from "../../data/dummyData";

function Home() {
  // Ambil data dari Local Storage
  const [taskList, setTaskList] = useState(() => {
    const savedTasks = localStorage.getItem("planora_tasks");

    return savedTasks ? JSON.parse(savedTasks) : tasks;
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Simpan ke Local Storage setiap task berubah
  useEffect(() => {
    localStorage.setItem(
      "planora_tasks",
      JSON.stringify(taskList)
    );
  }, [taskList]);

  const toggleTask = (id) => {
    setTaskList(
      taskList.map((task) =>
        task.id === id
          ? {
              ...task,
              completed: !task.completed,
            }
          : task
      )
    );
  };

  const addTask = ({ title }) => {
    const newTask = {
      id: Date.now(),
      title,
      completed: false,
    };

    setTaskList([...taskList, newTask]);
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

      <BottomNavigation
        onAddClick={() => setIsModalOpen(true)}
      />

      <AddTaskModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddTask={addTask}
      />
    </div>
  );
}

export default Home;