const STORAGE_KEY = "planora_reflections";

export function getReflections() {
  const saved = localStorage.getItem(
    STORAGE_KEY
  );

  return saved ? JSON.parse(saved) : [];
}

export function getTodayReflection() {
  const today = new Date()
    .toISOString()
    .split("T")[0];

  return getReflections().find(
    (item) => item.date === today
  );
}

export function saveReflection(reflection) {
  const reflections = getReflections();

  const index = reflections.findIndex(
    (item) => item.date === reflection.date
  );

  if (index >= 0) {
    reflections[index] = reflection;
  } else {
    reflections.push(reflection);
  }

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(reflections)
  );
}