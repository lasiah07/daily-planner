import { useEffect, useState } from "react";
import "./AddEventModal.css";

function AddEventModal({
  isOpen,
  onClose,
  onSave,
  selectedDate,
}) {
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (isOpen) {
      setTitle("");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSave = () => {
    if (!title.trim()) return;

    onSave({
      id: Date.now(),
      title,
      date: selectedDate,
    });

    setTitle("");
  };

  return (
    <div className="modal-overlay">
      <div className="event-modal">

        <h2>Add Event</h2>

        <p className="selected-date">
          {selectedDate}
        </p>

        <input
          type="text"
          placeholder="Event title..."
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
        />

        <div className="modal-actions">

          <button
            className="cancel-btn"
            onClick={onClose}
          >
            Cancel
          </button>

          <button
            className="save-btn"
            onClick={handleSave}
          >
            Save
          </button>

        </div>

      </div>
    </div>
  );
}

export default AddEventModal;