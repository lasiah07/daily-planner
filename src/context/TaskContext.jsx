import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import {
  getTasks,
  saveTasks,
} from "../services/taskStorage";

import { tasks as dummyTasks } from "../data/dummyData";

const TaskContext = createContext();

export function TaskProvider({
  children,
}) {
  const [tasks, setTasks] = useState(() => {
    const saved = getTasks();

    return saved.length
      ? saved
      : dummyTasks;
  });

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  const addTask = (task) => {
    setTasks((prev) => [
      ...prev,
      task,
    ]);
  };

  const updateTask = (updatedTask) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === updatedTask.id
          ? updatedTask
          : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks((prev) =>
      prev.filter(
        (task) => task.id !== id
      )
    );
  };

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? {
              ...task,
              completed:
                !task.completed,
            }
          : task
      )
    );
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        updateTask,
        deleteTask,
        toggleTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export function useTasks() {
  return useContext(TaskContext);
}