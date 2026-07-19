import { useState } from "react";
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
import { useNotes } from "../../context/NoteContext";
import { useUI } from "../../context/UIContext";

function Notes() {
  const {
    notes,
    addNote,
    updateNote,
    deleteNote,
    togglePin,
  } = useNotes ();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingNote, setEditingNote] = useState(null);

  const [selectedNote, setSelectedNote] = useState(null);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const [isSearching, setIsSearching] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const [selectedCategory, setSelectedCategory] =
    useState("Semua");

  const {
  activeModal,
  closeModal,
} = useUI();

  const saveNote = ({
    title,
    content,
    category,
    color,
  }) => {
    if (editingNote) {
      updateNote({
        ...editingNote,
        title,
        content,
        category,
        color,
      });
    } else {
      addNote({
        id: Date.now(),
        title,
        content,
        category,
        color,
        pinned: false,
        date: new Date().toLocaleDateString(
          "id-ID",
          {
            day:"numeric",
            month: "short",
            year: "numeric",
          }
        ),
      });
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
    deleteNote(selectedNote);

    setSelectedNote(null);
    setIsDeleteOpen(false);
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
        isOpen={
          isModalOpen ||
          activeModal === "note"
        }
        onClose={() => {
          setEditingNote(null);
          setIsModalOpen(false);
          closeModal();
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