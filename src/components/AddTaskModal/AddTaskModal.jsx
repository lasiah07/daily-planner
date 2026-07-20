import { useState, useEffect } from "react";
import "./AddTaskModal.css";

import {
  RiCloseLine,
  RiCalendarEventLine,
} from "react-icons/ri";

function AddTaskModal({
  isOpen,
  onClose,
  onAddTask,
  editTask,
  defaultDeadline,
  hideType = false,
}) {
  const [title, setTitle] = useState("");
  const [taskType, setTaskType] =
    useState("task");

  const [hasDeadline, setHasDeadline] =
    useState(false);

  const [deadline, setDeadline] =
    useState("");

  useEffect(() => {
    if (editTask) {
      setTitle(editTask.title);

      setTaskType(
        editTask.type || "task"
      );

      setHasDeadline(!!editTask.deadline);

      setDeadline(editTask.deadline || "");
    } else {
      setTitle("");

      setTaskType(
        hideType ? "routine" : "task"
      );

      if (defaultDeadline) {
        setHasDeadline(true);
        setDeadline(defaultDeadline);
      } else {
        setHasDeadline(false);
        setDeadline("");
      }
    }
  }, [
    editTask,
    isOpen,
    defaultDeadline,
    hideType,
  ]);

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (!title.trim()) return;

    onAddTask({
      id: editTask?.id,
      title,
      type: taskType,

      deadline:
        taskType === "routine"
          ? null
          : hasDeadline
          ? deadline
          : null,
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
            {editTask
              ? "Edit Aktivitas"
              : "Tambah Aktivitas"}
          </h2>

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
            onChange={(e) =>
              setTitle(e.target.value)
            }
          />

        </div>

        {!hideType && (
          <div className="form-group">

            <label>Jenis Aktivitas</label>

            <div className="task-type">

              <button
                type="button"
                className={
                  taskType === "task"
                    ? "type-btn active-type"
                    : "type-btn"
                }
                onClick={() =>
                  setTaskType("task")
                }
              >
                One Time Task
              </button>

              <button
                type="button"
                className={
                  taskType === "routine"
                    ? "type-btn active-type"
                    : "type-btn"
                }
                onClick={() => {
                  setTaskType("routine");
                  setHasDeadline(false);
                }}
              >
                Routine
              </button>

            </div>

          </div>
        )}

        {taskType === "task" && (
          <>
            <div className="deadline-toggle">

              <label className="checkbox-row">

                <input
                  type="checkbox"
                  checked={hasDeadline}
                  onChange={() =>
                    setHasDeadline(
                      !hasDeadline
                    )
                  }
                />

                <span>
                  Tambahkan Deadline
                </span>

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
                    setDeadline(
                      e.target.value
                    )
                  }
                />

              </div>
            )}
          </>
        )}

        <button
          className="save-button"
          onClick={handleSubmit}
        >
          {editTask
            ? "Simpan Perubahan"
            : "Simpan"}
        </button>

      </div>
    </>
  );
}

export default AddTaskModal;