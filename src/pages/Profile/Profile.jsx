import { useState } from "react";
import "./Profile.css";

import { useNavigate } from "react-router-dom";

import {
  RiUser3Fill,
  RiCheckboxCircleFill,
  RiStickyNoteFill,
  RiPaletteLine,
  RiNotification3Line,
  RiInformationLine,
  RiHistoryLine,
  RiFireFill,
  RiArrowRightSLine,
} from "react-icons/ri";

function Profile() {
  const navigate = useNavigate();

  const [tasks] = useState(() => {
    const saved = localStorage.getItem(
      "planora_tasks"
    );

    return saved ? JSON.parse(saved) : [];
  });

  const [notes] = useState(() => {
    const saved = localStorage.getItem(
      "planora_notes"
    );

    return saved ? JSON.parse(saved) : [];
  });

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  return (
    <div className="profile-page">

      <div className="profile-header">

        <div className="avatar">
          <RiUser3Fill />
        </div>

        <h2>Lasiah</h2>

        <p>
          Organize your day beautifully.
        </p>

      </div>

      <div className="stats-card">

        <h3>Your Statistics</h3>

        <div className="stat-item">

          <div className="stat-left">

            <RiCheckboxCircleFill />

            <span>Total Tasks</span>

          </div>

          <strong>{tasks.length}</strong>

        </div>

        <div className="stat-item">

          <div className="stat-left">

            <RiCheckboxCircleFill />

            <span>Completed</span>

          </div>

          <strong>{completedTasks}</strong>

        </div>

        <div className="stat-item">

          <div className="stat-left">

            <RiStickyNoteFill />

            <span>Total Notes</span>

          </div>

          <strong>{notes.length}</strong>

        </div>

      </div>

      <div className="settings-card">

        <h3>Settings</h3>

        <button
          className="setting-item"
          onClick={() => navigate("/history")}
        >

          <div className="setting-left">

            <RiHistoryLine />

            <span>Activity History</span>

          </div>

          <RiArrowRightSLine />

        </button>

        <button
          className="setting-item"
          onClick={() => navigate("/routine")}
        >

          <div className="setting-left">

            <RiFireFill />

            <span>Routine Tracker</span>

          </div>

          <RiArrowRightSLine />

        </button>

        <button className="setting-item">

          <div className="setting-left">

            <RiPaletteLine />

            <span>Appearance</span>

          </div>

          <RiArrowRightSLine />

        </button>

        <button className="setting-item">

          <div className="setting-left">

            <RiNotification3Line />

            <span>Notifications</span>

          </div>

          <RiArrowRightSLine />

        </button>

        <button className="setting-item">

          <div className="setting-left">

            <RiInformationLine />

            <span>About Planora</span>

          </div>

          <RiArrowRightSLine />

        </button>

      </div>

      <p className="version">
        Planora v1.0
      </p>

    </div>
  );
}

export default Profile;