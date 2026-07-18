import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const NoteContext = createContext();

export function NoteProvider({
  children,
}) {
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem(
      "planora_notes"
    );

    return saved
      ? JSON.parse(saved)
      : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "planora_notes",
      JSON.stringify(notes)
    );
  }, [notes]);

  const addNote = (note) => {
    setNotes((prev) => [
      ...prev,
      note,
    ]);
  };

  const updateNote = (updatedNote) => {
    setNotes((prev) =>
      prev.map((note) =>
        note.id === updatedNote.id
          ? updatedNote
          : note
      )
    );
  };

  const deleteNote = (id) => {
    setNotes((prev) =>
      prev.filter(
        (note) => note.id !== id
      )
    );
  };

  const togglePin = (id) => {
  setNotes((prev) =>
    prev.map((note) =>
      note.id === id
        ? {
            ...note,
            pinned: !note.pinned,
          }
        : note
    )
  );
};

  return (
    <NoteContext.Provider
      value={{
        notes,
        addNote,
        updateNote,
        deleteNote,
        togglePin,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
}

export function useNotes() {
  return useContext(NoteContext);
}