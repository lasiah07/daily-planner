const STORAGE_KEY = "planora_reflections";

export function getAllReflections() {
  return (
    JSON.parse(
      localStorage.getItem(STORAGE_KEY)
    ) || []
  );
}

export function getTodayReflection() {
  const today = new Date()
    .toISOString()
    .split("T")[0];

  return getAllReflections().find(
    (item) => item.date === today
  );
}

export function saveReflection(data) {
  const reflections =
    getAllReflections();

  const index = reflections.findIndex(
    (item) => item.date === data.date
  );

  if (index >= 0) {
    reflections[index] = data;
  } else {
    reflections.push(data);
  }

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(reflections)
  );
}