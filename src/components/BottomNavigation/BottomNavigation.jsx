import "./BottomNavigation.css";
import { NavLink } from "react-router-dom";

import {
  RiHome5Fill,
  RiStickyNoteFill,
  RiCalendar2Fill,
  RiUser3Fill,
  RiAddLine,
} from "react-icons/ri";

function BottomNavigation({ onAddClick }) {
  return (
    <nav className="bottom-nav">

      <NavLink
        to="/home"
        className={({ isActive }) =>
          `nav-item ${isActive ? "active" : ""}`
        }
      >
        <RiHome5Fill />
        <span>Home</span>
      </NavLink>

      {/* NOTES PINDAH KE KIRI */}
      <NavLink
        to="/notes"
        className={({ isActive }) =>
          `nav-item ${isActive ? "active" : ""}`
        }
      >
        <RiStickyNoteFill />
        <span>Notes</span>
      </NavLink>

      <button
        className="add-button"
        onClick={onAddClick}
      >
        <RiAddLine />
      </button>

      {/* CALENDAR PINDAH KE KANAN */}
      <NavLink
        to="/calendar"
        className={({ isActive }) =>
          `nav-item ${isActive ? "active" : ""}`
        }
      >
        <RiCalendar2Fill />
        <span>Calendar</span>
      </NavLink>

      <NavLink
        to="/profile"
        className={({ isActive }) =>
          `nav-item ${isActive ? "active" : ""}`
        }
      >
        <RiUser3Fill />
        <span>Profile</span>
      </NavLink>

    </nav>
  );
}

export default BottomNavigation;