import { useState, useEffect } from "react";
import "./AddNoteModal.css";
import { RiCloseLine } from "react-icons/ri";

function AddNoteModal({
  isOpen,
  onClose,
  onSave,
  editNote,
}) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] =
    useState("Belajar");
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    if (!isOpen) return;

    if (editNote) {
      setTitle(editNote.title);
      setContent(editNote.content);
      setCategory(
        editNote.category || "Belajar"
      );
      setColor(editNote.color || "#ffffff");
    } else {
      setTitle("");
      setContent("");
      setCategory("Belajar");
      setColor("#ffffff");
    }
  }, [editNote, isOpen]);

  if (!isOpen) return null;

  const handleSave = () => {
    if (
      title.trim() === "" &&
      content.trim() === ""
    ) {
      return;
    }

    onSave({
      title: title.trim(),
      content: content.trim(),
      category,
      color,
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
          <h2>
            {editNote
              ? "Edit Catatan"
              : "Tambah Catatan"}
          </h2>

          <button
            className="close-button"
            onClick={onClose}
          >
            <RiCloseLine />
          </button>
        </div>

        <div className="form-group">
          <label>Judul</label>

          <input
            type="text"
            placeholder="Masukkan judul..."
            value={title}
            onChange={(e) =>
              setTitle(e.target.value)
            }
          />
        </div>

        <div className="form-group">
          <label>Isi Catatan</label>

          <textarea
            rows="8"
            placeholder="Tulis catatanmu di sini..."
            value={content}
            onChange={(e) =>
              setContent(e.target.value)
            }
          />
        </div>

        <div className="form-group">
          <label>Kategori</label>

          <select
            value={category}
            onChange={(e) =>
              setCategory(e.target.value)
            }
          >
            <option value="Belajar">
              📚 Belajar
            </option>

            <option value="Kerja">
              💼 Kerja
            </option>

            <option value="Personal">
              🏠 Personal
            </option>

            <option value="Ide">
              💡 Ide
            </option>

            <option value="Ibadah">
              🕌 Ibadah
            </option>
          </select>
        </div>

        <div className="form-group">

          <label>Warna Catatan</label>

          <div className="color-picker">

            <button
              type="button"
              className={`color-dot ${color === "#FFFFFF" ? "active" : ""}`}
              style={{ background: "#FFFFFF" }}
              onClick={() => setColor("#FFFFFF")}
            />

            <button
              type="button"
              className={`color-dot ${color === "#EAF4FF" ? "active" : ""}`}
              style={{ background: "#EAF4FF" }}
              onClick={() => setColor("#EAF4FF")}
            />

            <button
              type="button"
              className={`color-dot ${color === "#ECFDF3" ? "active" : ""}`}
              style={{ background: "#ECFDF3" }}
              onClick={() => setColor("#ECFDF3")}
            />

            <button
              type="button"
              className={`color-dot ${color === "#FFF8DB" ? "active" : ""}`}
              style={{ background: "#FFF8DB" }}
              onClick={() => setColor("#FFF8DB")}
            />

            <button
              type="button"
              className={`color-dot ${color === "#F3E8FF" ? "active" : ""}`}
              style={{ background: "#F3E8FF" }}
              onClick={() => setColor("#F3E8FF")}
            />

            <button
              type="button"
              className={`color-dot ${color === "#FFE8F1" ? "active" : ""}`}
              style={{ background: "#FFE8F1" }}
              onClick={() => setColor("#FFE8F1")}
            />

            </div>

        </div>

        <button
          className="save-button"
          onClick={handleSave}
          disabled={
            title.trim() === "" &&
            content.trim() === ""
          }
        >
          {editNote
            ? "Simpan Perubahan"
            : "Simpan"}
        </button>
      </div>
    </>
  );
}

export default AddNoteModal;