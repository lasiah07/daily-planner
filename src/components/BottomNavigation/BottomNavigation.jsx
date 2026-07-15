import "./BottomNavigation.css";
import { NavLink } from "react-router-dom";

import {
  RiHome5Fill,
  RiCalendar2Fill,
  RiStickyNoteFill,
  RiUser3Fill,
} from "react-icons/ri";

function BottomNavigation() {
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
        to="/notes"
        className={({ isActive }) =>
          `nav-item ${isActive ? "active" : ""}`
        }
      >
        <RiStickyNoteFill />
        <span>Notes</span>
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