import "./NoteCard.css";
import NoteMenu from "../NoteMenu/NoteMenu";

function NoteCard({
  note,
  onEdit,
  onDelete,
}) {
  return (
    <div className="note-card">
      <div className="note-top">
        <h3>{note.title}</h3>

        <NoteMenu
          onEdit={() => onEdit(note)}
          onDelete={() => onDelete(note.id)}
        />
      </div>

      <p>{note.content}</p>

      <span>{note.date}</span>
    </div>
  );
}

export default NoteCard;