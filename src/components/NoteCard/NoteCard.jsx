import "./NoteCard.css";
import NoteMenu from "../NoteMenu/NoteMenu";
import { RiPushpin2Fill } from "react-icons/ri";

function NoteCard({
  note,
  onEdit,
  onDelete,
  onTogglePin,
}) {
  return (
    <div
      className={`note-card ${
        note.pinned ? "pinned-card" : ""
      }`}
      style={{
        backgroundColor:
          note.color || "#FFFFFF",
      }}
    >
      <div className="note-top">
        <div className="note-header">
          <div className="note-badges">
            <span
              className={`category-badge category-${(
                note.category || "Belajar"
              ).toLowerCase()}`}
            >
              {note.category || "Belajar"}
            </span>
          </div>

          <h3>{note.title}</h3>
        </div>

        <div className="note-actions">
          {note.pinned && (
            <span className="pin-badge">
              <RiPushpin2Fill />
            </span>
          )}

          <NoteMenu
            pinned={note.pinned}
            onPin={() =>
              onTogglePin(note.id)
            }
            onEdit={() =>
              onEdit(note)
            }
            onDelete={() =>
              onDelete(note.id)
            }
          />
        </div>
      </div>

      <p>{note.content}</p>

      <span className="note-date">
        {note.date}
      </span>
    </div>
  );
}

export default NoteCard;