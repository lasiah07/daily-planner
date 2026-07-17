const STORAGE_KEY = "planora_routines";

export function getRoutines() {
  const saved = localStorage.getItem(
    STORAGE_KEY
  );

  return saved ? JSON.parse(saved) : [];
}

export function saveRoutines(routines) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(routines)
  );
}