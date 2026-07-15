import { useState, useEffect, useRef } from "react";
import "./NoteMenu.css";
import {
  RiMore2Fill,
  RiEdit2Line,
  RiDeleteBin6Line,
} from "react-icons/ri";

function NoteMenu({ onEdit, onDelete }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
  }, []);

  return (
    <div
      className="note-menu"
      ref={menuRef}
    >
      <button
        className="menu-btn"
        onClick={() => setOpen(!open)}
      >
        <RiMore2Fill />
      </button>

      {open && (
        <div className="dropdown-menu">
          <button
            onClick={() => {
              onEdit();
              setOpen(false);
            }}
          >
            <RiEdit2Line />
            Edit
          </button>

          <button
            className="delete"
            onClick={() => {
              onDelete();
              setOpen(false);
            }}
          >
            <RiDeleteBin6Line />
            Hapus
          </button>
        </div>
      )}
    </div>
  );
}

export default NoteMenu;