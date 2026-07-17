const STORAGE_KEY = "planora_notes";

export function getNotes() {
  const saved = localStorage.getItem(
    STORAGE_KEY
  );

  return saved ? JSON.parse(saved) : [];
}

export function saveNotes(notes) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(notes)
  );
}