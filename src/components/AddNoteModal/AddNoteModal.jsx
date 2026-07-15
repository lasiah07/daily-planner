import { useState, useEffect } from "react";
import "./AddNoteModal.css";
import { RiCloseLine } from "react-icons/ri";

function AddNoteModal({
  isOpen,
  onClose,
  onSave,
  editNote,
}) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (!isOpen) return;

    if (editNote) {
      setTitle(editNote.title);
      setContent(editNote.content);
    } else {
      setTitle("");
      setContent("");
    }
  }, [editNote, isOpen]);

  if (!isOpen) return null;

  const handleSave = () => {
    if (
      title.trim() === "" &&
      content.trim() === ""
    ) {
      return;
    }

    onSave({
      title: title.trim(),
      content: content.trim(),
    });

    onClose();
  };

  return (
    <>
      <div
        className="modal-overlay"
        onClick={onClose}
      />

      <div className="modal-container">
        <div className="modal-header">
          <h2>
            {editNote
              ? "Edit Catatan"
              : "Tambah Catatan"}
          </h2>

          <button
            className="close-button"
            onClick={onClose}
          >
            <RiCloseLine />
          </button>
        </div>

        <div className="form-group">
          <label>Judul</label>

          <input
            type="text"
            placeholder="Masukkan judul..."
            value={title}
            onChange={(e) =>
              setTitle(e.target.value)
            }
          />
        </div>

        <div className="form-group">
          <label>Isi Catatan</label>

          <textarea
            rows="8"
            placeholder="Tulis catatanmu di sini..."
            value={content}
            onChange={(e) =>
              setContent(e.target.value)
            }
          />
        </div>

        <button
          className="save-button"
          onClick={handleSave}
          disabled={
            title.trim() === "" &&
            content.trim() === ""
          }
        >
          {editNote
            ? "Simpan Perubahan"
            : "Simpan"}
        </button>
      </div>
    </>
  );
}

export default AddNoteModal;