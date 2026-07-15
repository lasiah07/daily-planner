import { useState, useEffect } from "react";
import "./Home.css";

import DeadlineList from "../../components/DeadlineList/DeadlineList";
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

  // Checklist
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

  // Tambah Task
  const addTask = ({ title, deadline }) => {
    const newTask = {
      id: Date.now(),
      title,
      completed: false,
      deadline,
    };

    setTaskList([...taskList, newTask]);
  };

  // Progress
  const completedTasks = taskList.filter(
    (task) => task.completed
  ).length;

  const totalTasks = taskList.length;

  // Hanya tampilkan task tanpa deadline
  const todayTasks = taskList.filter(
    (task) => !task.deadline
  );

  const deadlineTasks = taskList.filter(
  (task) => task.deadline
  );

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
        tasks={todayTasks}
        onToggle={toggleTask}
      />

      <DeadlineList
        tasks={deadlineTasks}
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