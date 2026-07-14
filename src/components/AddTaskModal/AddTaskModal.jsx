import { useState } from "react";
import "./AddTaskModal.css";
import { RiCloseLine } from "react-icons/ri";

function AddTaskModal({ isOpen, onClose, onAddTask }) {
  const [title, setTitle] = useState("");

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (title.trim() === "") return;

    onAddTask(title);

    setTitle("");

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
          <h2>Tambah Aktivitas</h2>

          <button
            className="close-button"
            onClick={onClose}
          >
            <RiCloseLine />
          </button>
        </div>

        <div className="form-group">
          <label>Judul Aktivitas</label>

          <input
            type="text"
            placeholder="Contoh: Belajar React"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <button
          className="save-button"
          onClick={handleSubmit}
        >
          Simpan
        </button>
      </div>
    </>
  );
}

export default AddTaskModal;