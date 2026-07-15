import { useState, useEffect } from "react";
import "./Notes.css";

import {
  RiSearchLine,
  RiAddLine,
} from "react-icons/ri";

import EmptyState from "../../components/EmptyState/EmptyState";
import AddNoteModal from "../../components/AddNoteModal/AddNoteModal";
import NoteCard from "../../components/NoteCard/NoteCard";
import ConfirmModal from "../../components/ConfirmModal/ConfirmModal";

function Notes() {
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem("planora_notes");
    return saved ? JSON.parse(saved) : [];
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [editingNote, setEditingNote] = useState(null);

  const [selectedNote, setSelectedNote] = useState(null);

  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem(
      "planora_notes",
      JSON.stringify(notes)
    );
  }, [notes]);

  const saveNote = ({ title, content }) => {
    if (editingNote) {
      setNotes(
        notes.map((note) =>
          note.id === editingNote.id
            ? {
                ...note,
                title,
                content,
              }
            : note
        )
      );
    } else {
      const newNote = {
        id: Date.now(),
        title,
        content,
        date: new Date().toLocaleDateString(
          "id-ID",
          {
            day: "numeric",
            month: "short",
            year: "numeric",
          }
        ),
      };

      setNotes([newNote, ...notes]);
    }

    setEditingNote(null);
    setIsModalOpen(false);
  };

  const handleEdit = (note) => {
    setEditingNote(note);
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    setSelectedNote(id);
    setIsDeleteOpen(true);
  };

  const confirmDelete = () => {
    setNotes(
      notes.filter(
        (note) => note.id !== selectedNote
      )
    );

    setSelectedNote(null);
    setIsDeleteOpen(false);
  };

  return (
    <div className="notes-page">
      <header className="notes-header">
        <h1>Notes</h1>

        <div className="header-actions">
          <button className="header-btn">
            <RiSearchLine />
          </button>

          <button
            className="header-btn"
            onClick={() => {
              setEditingNote(null);
              setIsModalOpen(true);
            }}
          >
            <RiAddLine />
          </button>
        </div>
      </header>

      {notes.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="notes-list">
          {notes.map((note) => (
            <NoteCard
              key={note.id}
              note={note}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}

      <AddNoteModal
        isOpen={isModalOpen}
        onClose={() => {
          setEditingNote(null);
          setIsModalOpen(false);
        }}
        onSave={saveNote}
        editNote={editingNote}
      />

      <ConfirmModal
        isOpen={isDeleteOpen}
        title="Hapus Catatan"
        message="Apakah kamu yakin ingin menghapus catatan ini?"
        onCancel={() => {
          setSelectedNote(null);
          setIsDeleteOpen(false);
        }}
        onConfirm={confirmDelete}
      />
    </div>
  );
}

export default Notes;