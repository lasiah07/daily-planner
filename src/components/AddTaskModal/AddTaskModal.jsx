import "./AddTaskModal.css";
import { RiCloseLine } from "react-icons/ri";

function AddTaskModal({ isOpen, onClose }) {
  if (!isOpen) return null;

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

        <p className="coming-soon">
          Form akan kita buat pada langkah berikutnya.
        </p>
      </div>
    </>
  );
}

export default AddTaskModal;