import "./ConfirmModal.css";
import { RiCloseLine } from "react-icons/ri";

function ConfirmModal({
  isOpen,
  title,
  message,
  onCancel,
  onConfirm,
}) {
  if (!isOpen) return null;

  return (
    <>
      <div
        className="confirm-overlay"
        onClick={onCancel}
      />

      <div className="confirm-modal">
        <div className="confirm-header">
          <h2>{title}</h2>

          <button onClick={onCancel}>
            <RiCloseLine />
          </button>
        </div>

        <p>{message}</p>

        <div className="confirm-actions">
          <button
            className="cancel-btn"
            onClick={onCancel}
          >
            Batal
          </button>

          <button
            className="delete-confirm-btn"
            onClick={onConfirm}
          >
            Hapus
          </button>
        </div>
      </div>
    </>
  );
}

export default ConfirmModal;