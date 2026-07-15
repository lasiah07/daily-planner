import { useState, useEffect, useRef } from "react";
import {
  RiMore2Fill,
  RiEditLine,
  RiDeleteBin6Line,
} from "react-icons/ri";
import "./TaskMenu.css";

function TaskMenu({ onEdit, onDelete }) {
  const [open, setOpen] = useState(false);

  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  return (
    <div
      className="task-menu"
      ref={menuRef}
    >
      <button
        className="menu-button"
        onClick={() => setOpen(!open)}
      >
        <RiMore2Fill />
      </button>

      {open && (
        <div className="menu-dropdown">
          <button
            onClick={() => {
              setOpen(false);
              onEdit();
            }}
          >
            <RiEditLine />
            Edit
          </button>

          <button
            className="delete-btn"
            onClick={() => {
              setOpen(false);
              onDelete();
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

export default TaskMenu;