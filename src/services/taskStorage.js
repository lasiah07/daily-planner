const STORAGE_KEY = "planora_tasks";

export function getTasks() {
  const saved = localStorage.getItem(
    STORAGE_KEY
  );

  return saved ? JSON.parse(saved) : [];
}

export function saveTasks(tasks) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(tasks)
  );
}

export function addTask(task) {
  const tasks = getTasks();

  tasks.push(task);

  saveTasks(tasks);
}

export function updateTask(updatedTask) {
  const tasks = getTasks().map((task) =>
    task.id === updatedTask.id
      ? updatedTask
      : task
  );

  saveTasks(tasks);
}

export function deleteTask(id) {
  const tasks = getTasks().filter(
    (task) => task.id !== id
  );

  saveTasks(tasks);
}