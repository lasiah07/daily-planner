import { useState, useEffect } from "react";
import "./AddTaskModal.css";
import {
  RiCloseLine,
  RiCalendarEventLine,
} from "react-icons/ri";

function AddTaskModal({ isOpen, onClose, onAddTask }) {
  const [title, setTitle] = useState("");
  const [hasDeadline, setHasDeadline] = useState(false);
  const [deadline, setDeadline] = useState("");

  useEffect(() => {
    if (!isOpen) {
      setTitle("");
      setHasDeadline(false);
      setDeadline("");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (title.trim() === "") return;

    onAddTask({
      title,
      deadline: hasDeadline ? deadline : null,
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

        <div className="deadline-toggle">
          <label className="checkbox-row">
            <input
              type="checkbox"
              checked={hasDeadline}
              onChange={() =>
                setHasDeadline(!hasDeadline)
              }
            />

            <span>Tambahkan Deadline</span>
          </label>
        </div>

        {hasDeadline && (
          <div className="form-group">
            <label className="deadline-label">
              <RiCalendarEventLine />
              Deadline
            </label>

            <input
              type="date"
              value={deadline}
              onChange={(e) =>
                setDeadline(e.target.value)
              }
            />
          </div>
        )}

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