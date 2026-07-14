import { useState, useEffect } from "react";
import "./Home.css";

import GreetingCard from "../../components/GreetingCard/GreetingCard";
import ProgressCard from "../../components/ProgressCard/ProgressCard";
import TaskList from "../../components/TaskList/TaskList";
import FloatingButton from "../../components/FloatingButton/FloatingButton";
import AddTaskModal from "../../components/AddTaskModal/AddTaskModal";
import BottomNavigation from "../../components/BottomNavigation/BottomNavigation";

import { user, tasks } from "../../data/dummyData";

function Home() {
  // Ambil data dari localStorage jika ada
  const [taskList, setTaskList] = useState(() => {
    const savedTasks = localStorage.getItem("planora-tasks");

    return savedTasks ? JSON.parse(savedTasks) : tasks;
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Simpan otomatis setiap task berubah
  useEffect(() => {
    localStorage.setItem(
      "planora-tasks",
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

  const addTask = (title) => {
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

      <FloatingButton
        onClick={() => setIsModalOpen(true)}
      />

      <AddTaskModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddTask={addTask}
      />

      <BottomNavigation />
    </div>
  );
}

export default Home;