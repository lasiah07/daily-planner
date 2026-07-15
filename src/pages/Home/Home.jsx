import { useState, useEffect } from "react";
import "./Home.css";

import GreetingCard from "../../components/GreetingCard/GreetingCard";
import ProgressCard from "../../components/ProgressCard/ProgressCard";
import TaskList from "../../components/TaskList/TaskList";
import DeadlineList from "../../components/DeadlineList/DeadlineList";
import BottomNavigation from "../../components/BottomNavigation/BottomNavigation";
import AddTaskModal from "../../components/AddTaskModal/AddTaskModal";
import AccordionSection from "../../components/AccordionSection/AccordionSection";
import ConfirmModal from "../../components/ConfirmModal/ConfirmModal";

import { user, tasks } from "../../data/dummyData";

function Home() {
  const [taskList, setTaskList] = useState(() => {
    const savedTasks = localStorage.getItem("planora_tasks");
    return savedTasks ? JSON.parse(savedTasks) : tasks;
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [editingTask, setEditingTask] = useState(null);

  const [selectedTask, setSelectedTask] = useState(null);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

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

  const addTask = (taskData) => {
    if (taskData.id) {
      setTaskList(
        taskList.map((task) =>
          task.id === taskData.id
            ? {
                ...task,
                title: taskData.title,
                deadline: taskData.deadline,
              }
            : task
        )
      );
    } else {
      const newTask = {
        id: Date.now(),
        title: taskData.title,
        completed: false,
        deadline: taskData.deadline,
      };

      setTaskList([...taskList, newTask]);
    }

    setEditingTask(null);
    setIsModalOpen(false);
  };

  const editTask = (id) => {
    const task = taskList.find(
      (task) => task.id === id
    );

    setEditingTask(task);
    setIsModalOpen(true);
  };

  const deleteTask = (id) => {
    setSelectedTask(id);
    setIsDeleteOpen(true);
  };

  const confirmDelete = () => {
    setTaskList(
      taskList.filter(
        (task) => task.id !== selectedTask
      )
    );

    setSelectedTask(null);
    setIsDeleteOpen(false);
  };

  const completedTasks = taskList.filter(
    (task) => task.completed
  ).length;

  const totalTasks = taskList.length;

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

      <AccordionSection
        title="Today's Plan"
        count={todayTasks.length}
        defaultOpen={false}
      >
        <TaskList
          tasks={todayTasks}
          onToggle={toggleTask}
          onDelete={deleteTask}
          onEdit={editTask}
        />
      </AccordionSection>

      <AccordionSection
        title="Upcoming Deadline"
        count={deadlineTasks.length}
        defaultOpen={false}
      >
        <DeadlineList
          tasks={deadlineTasks}
          onToggle={toggleTask}
        />
      </AccordionSection>

      <BottomNavigation
        onAddClick={() => {
          setEditingTask(null);
          setIsModalOpen(true);
        }}
      />

      <AddTaskModal
        isOpen={isModalOpen}
        onClose={() => {
          setEditingTask(null);
          setIsModalOpen(false);
        }}
        onAddTask={addTask}
        editTask={editingTask}
      />

      <ConfirmModal
        isOpen={isDeleteOpen}
        title="Hapus Aktivitas"
        message="Apakah kamu yakin ingin menghapus aktivitas ini?"
        onCancel={() => {
          setSelectedTask(null);
          setIsDeleteOpen(false);
        }}
        onConfirm={confirmDelete}
      />
    </div>
  );
}

export default Home;