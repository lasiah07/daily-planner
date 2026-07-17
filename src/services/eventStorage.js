const STORAGE_KEY = "planora_events";

export function getEvents() {
  const saved = localStorage.getItem(
    STORAGE_KEY
  );

  return saved ? JSON.parse(saved) : [];
}

export function saveEvents(events) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(events)
  );
}