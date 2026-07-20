import "./Profile.css";

import { useNavigate } from "react-router-dom";

import {
  RiUser3Fill,
  RiPaletteLine,
  RiNotification3Line,
  RiInformationLine,
  RiHistoryLine,
  RiFireFill,
  RiArrowRightSLine,
} from "react-icons/ri";

function Profile() {
  const navigate = useNavigate();

  // Nanti diganti dari Authentication
  const user = {
    name: "Guest",
    bio: "Organize your day beautifully.",
    avatar: null,
  };

  return (
    <div className="profile-page">

      <div className="profile-header">

        <div className="avatar">

          <RiUser3Fill />

        </div>

        <h2>{user.name}</h2>

        <p>{user.bio}</p>

      </div>

      {/* ACTIVITY */}

      <div className="settings-card">

        <h3>Activity</h3>

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

      </div>

      {/* PREFERENCES */}

      <div className="settings-card">

        <h3>Preferences</h3>

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

      </div>

      {/* ABOUT */}

      <div className="settings-card">

        <h3>About</h3>

        <button className="setting-item">

          <div className="setting-left">

            <RiInformationLine />

            <span>About Planora</span>

          </div>

          <RiArrowRightSLine />

        </button>

      </div>

      <p className="version">

        Planora v1.0.0

      </p>

    </div>
  );
}

export default Profile;