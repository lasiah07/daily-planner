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
  const today = new Date()
    .toISOString()
    .split("T")[0];

  setTasks((prev) =>
    prev.map((task) => {
      if (
        task.type === "routine" &&
        task.completed &&
        task.lastChecked !== today
      ) {
        return {
          ...task,
          completed: false,
        };
      }

      return task;
    })
  );
}, []);

useEffect(() => {

  const today = new Date()
    .toISOString()
    .split("T")[0];

  const updatedTasks = tasks.map((task) => {

    if (task.type !== "routine") {
      return task;
    }

    if (task.lastReset === today) {
      return task;
    }

    return {
      ...task,
      completed: false,
      lastReset: today,
    };

  });

  saveTasks(updatedTasks);

  if (
    JSON.stringify(updatedTasks) !==
    JSON.stringify(tasks)
  ) {
    setTasks(updatedTasks);
  }

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
  const today = new Date()
    .toISOString()
    .split("T")[0];

  setTasks((prev) =>
    prev.map((task) => {
      if (task.id !== id) return task;

      const completed = !task.completed;

      let history = task.history || [];

      if (
        task.type === "routine" &&
        completed &&
        !history.includes(today)
      ) {
        history = [...history, today];
      }

      return {
        ...task,
        completed,
        lastChecked: today,
        history,
      };
    })
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