import { useState, useEffect } from "react";
import "./Notes.css";

import {
  RiSearchLine,
  RiAddLine,
  RiArrowLeftLine,
} from "react-icons/ri";

import EmptyState from "../../components/EmptyState/EmptyState";
import AddNoteModal from "../../components/AddNoteModal/AddNoteModal";
import NoteCard from "../../components/NoteCard/NoteCard";
import ConfirmModal from "../../components/ConfirmModal/ConfirmModal";
import FloatingButton from "../../components/FloatingButton/FloatingButton";

function Notes() {
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem("planora_notes");
    return saved ? JSON.parse(saved) : [];
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingNote, setEditingNote] = useState(null);

  const [selectedNote, setSelectedNote] = useState(null);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const [isSearching, setIsSearching] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const [selectedCategory, setSelectedCategory] =
    useState("Semua");

  useEffect(() => {
    localStorage.setItem(
      "planora_notes",
      JSON.stringify(notes)
    );
  }, [notes]);

  const saveNote = ({
    title,
    content,
    category,
    color,
  }) => {
    if (editingNote) {
      setNotes(
        notes.map((note) =>
          note.id === editingNote.id
            ? {
                ...note,
                title,
                content,
                category,
                color,
              }
            : note
        )
      );
    } else {
      const newNote = {
        id: Date.now(),
        title,
        content,
        category,
        color,
        pinned: false,
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

  const togglePin = (id) => {
    setNotes(
      notes.map((note) =>
        note.id === id
          ? {
              ...note,
              pinned: !note.pinned,
            }
          : note
      )
    );
  };

  const filteredNotes = notes
    .filter((note) => {
      const keyword =
        searchQuery.toLowerCase();

      const matchSearch =
        note.title
          .toLowerCase()
          .includes(keyword) ||
        note.content
          .toLowerCase()
          .includes(keyword);

      const matchCategory =
        selectedCategory === "Semua" ||
        note.category === selectedCategory;

      return matchSearch && matchCategory;
    })
    .sort(
      (a, b) =>
        Number(b.pinned) -
        Number(a.pinned)
    );

  return (
    <div className="notes-page">

      <header className="notes-header">
                {!isSearching ? (
          <>
            <h1>Notes</h1>

            <div className="header-actions">
              <button
                className="header-btn"
                onClick={() => setIsSearching(true)}
              >
                <RiSearchLine />
              </button>

            </div>
          </>
        ) : (
          <div className="search-header">
            <button
              className="back-btn"
              onClick={() => {
                setIsSearching(false);
                setSearchQuery("");
              }}
            >
              <RiArrowLeftLine />
            </button>

            <input
              type="text"
              placeholder="Search notes..."
              value={searchQuery}
              onChange={(e) =>
                setSearchQuery(e.target.value)
              }
              autoFocus
            />
          </div>
        )}
      </header>

      {notes.length > 0 && (
        <div className="category-filter">
          {[
            "Semua",
            "Belajar",
            "Kerja",
            "Personal",
            "Ide",
            "Ibadah",
          ].map((category) => (
            <button
              key={category}
              className={`category-chip ${
                selectedCategory === category
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                setSelectedCategory(category)
              }
            >
              {category}
            </button>
          ))}
        </div>
      )}

      {notes.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="notes-list">
          {filteredNotes.length === 0 ? (
            <p className="empty-search">
              Tidak ada catatan ditemukan.
            </p>
          ) : (
            filteredNotes.map((note) => (
              <NoteCard
                key={note.id}
                note={note}
                onEdit={handleEdit}
                onDelete={handleDelete}
                onTogglePin={togglePin}
              />
            ))
          )}
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

      <FloatingButton
        onClick={() => {
          setEditingNote(null);
          setIsModalOpen(true);
        }}
      />

    </div>
  );
}

export default Notes;