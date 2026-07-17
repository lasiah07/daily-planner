import "./History.css";

import {
  RiArrowLeftLine,
  RiCheckboxCircleFill,
  RiStickyNoteFill,
  RiCalendarEventFill,
} from "react-icons/ri";

import { useNavigate } from "react-router-dom";

function History() {
  const navigate = useNavigate();

  return (
    <div className="history-page">

      <div className="history-header">

        <button
          className="back-button"
          onClick={() => navigate("/profile")}
        >
          <RiArrowLeftLine />
        </button>

        <h1>Activity History</h1>

      </div>

      <p className="history-subtitle">
        Your completed activities will appear here.
      </p>

      <div className="history-card">

        <h3>20 Juli 2026</h3>

        <div className="history-item">

          <RiCheckboxCircleFill />

          <span>Belajar React</span>

        </div>

        <div className="history-item">

          <RiStickyNoteFill />

          <span>Membuat Daily Planner</span>

        </div>

        <div className="history-item">

          <RiCalendarEventFill />

          <span>Meeting Organisasi</span>

        </div>

      </div>

      <div className="history-card">

        <h3>19 Juli 2026</h3>

        <div className="history-item">

          <RiCheckboxCircleFill />

          <span>Belajar CSS</span>

        </div>

        <div className="history-item">

          <RiStickyNoteFill />

          <span>Ringkasan Materi React</span>

        </div>

      </div>

    </div>
  );
}

export default History;