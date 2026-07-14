import { useState, useEffect } from "react";
import "./AddTaskModal.css";
import { RiCloseLine } from "react-icons/ri";

function AddTaskModal({ isOpen, onClose, onAddTask }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Belajar");
  const [priority, setPriority] = useState("Low");

  useEffect(() => {
    if (!isOpen) {
      setTitle("");
      setCategory("Belajar");
      setPriority("Low");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (title.trim() === "") return;

    onAddTask({
      title,
      category,
      priority,
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
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSubmit();
              }
            }}
          />
        </div>

        <div className="form-group">
          <label>Kategori</label>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>Belajar</option>
            <option>Kuliah</option>
            <option>Personal</option>
            <option>Ibadah</option>
            <option>Kesehatan</option>
          </select>
        </div>

        <div className="form-group">
          <label>Prioritas</label>

          <div className="priority-group">
            <button
              type="button"
              className={`priority-btn ${
                priority === "Low" ? "active" : ""
              }`}
              onClick={() => setPriority("Low")}
            >
              🟢 Low
            </button>

            <button
              type="button"
              className={`priority-btn ${
                priority === "Medium" ? "active" : ""
              }`}
              onClick={() => setPriority("Medium")}
            >
              🟡 Medium
            </button>

            <button
              type="button"
              className={`priority-btn ${
                priority === "High" ? "active" : ""
              }`}
              onClick={() => setPriority("High")}
            >
              🔴 High
            </button>
          </div>
        </div>

        <button
          className="save-button"
          onClick={handleSubmit}
          disabled={title.trim() === ""}
        >
          Simpan
        </button>
      </div>
    </>
  );
}

export default AddTaskModal;