import { useState } from "react";
import "./Home.css";

import GreetingCard from "../../components/GreetingCard/GreetingCard";
import ProgressCard from "../../components/ProgressCard/ProgressCard";
import TaskList from "../../components/TaskList/TaskList";
import DeadlineList from "../../components/DeadlineList/DeadlineList";
import AddTaskModal from "../../components/AddTaskModal/AddTaskModal";
import AccordionSection from "../../components/AccordionSection/AccordionSection";
import ConfirmModal from "../../components/ConfirmModal/ConfirmModal";
import FloatingButton from "../../components/FloatingButton/FloatingButton";
import DailyReflection from "../../components/DailyReflection/DailyReflection";
import { useTasks } from "../../context/TaskContext";
import { useUI } from "../../context/UIContext";

import { user } from "../../data/dummyData";


function Home() {

  const {
    tasks: taskList,
    addTask,
    updateTask,
    deleteTask: removeTask,
    toggleTask,
  } = useTasks();

  const {
  activeModal,
  closeModal,
} = useUI();

  const [isModalOpen, setIsModalOpen] =
    useState(false);

  const [editingTask, setEditingTask] =
    useState(null);

  const [selectedTask, setSelectedTask] =
    useState(null);

  const [isDeleteOpen, setIsDeleteOpen] =
    useState(false);

  const handleAddTask = (taskData) => {

    if (taskData.id) {

      updateTask({
        ...taskData,
        completed:
          editingTask?.completed ?? false,
      });

    } else {

      addTask({
        id: Date.now(),
        title: taskData.title,
        completed: false,
        deadline: taskData.deadline,
      });

    }

    setEditingTask(null);
    setIsModalOpen(false);

  };

  const handleEditTask = (id) => {

    const task = taskList.find(
      (task) => task.id === id
    );

    setEditingTask(task);

    setIsModalOpen(true);

  };

  const handleDeleteTask = (id) => {

    setSelectedTask(id);

    setIsDeleteOpen(true);

  };

  const confirmDelete = () => {

    removeTask(selectedTask);

    setSelectedTask(null);

    setIsDeleteOpen(false);

  };

  const completedTasks =
    taskList.filter(
      (task) => task.completed
    ).length;

  const totalTasks =
    taskList.length;

  const todayTasks =
    taskList.filter(
      (task) => !task.deadline
    );

  const deadlineTasks =
    taskList.filter(
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
          onDelete={handleDeleteTask}
          onEdit={handleEditTask}
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

      <DailyReflection />

      <AddTaskModal
        isOpen={
          isModalOpen ||
          activeModal === "task"
        }
        onClose={() => {
          setEditingTask(null);
          setIsModalOpen(false);
          closeModal();
        }}
        onAddTask={handleAddTask}
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