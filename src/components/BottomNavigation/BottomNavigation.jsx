import "./BottomNavigation.css";

import {
  NavLink,
  useLocation,
} from "react-router-dom";

import { useUI } from "../../context/UIContext";

import {
  RiHome5Fill,
  RiStickyNoteFill,
  RiCalendar2Fill,
  RiUser3Fill,
  RiAddLine,
} from "react-icons/ri";

function BottomNavigation() {
  const location = useLocation();

  const { openModal } = useUI();

  const showAddButton =
    location.pathname === "/home" ||
    location.pathname === "/notes";

  const handleAdd = () => {
    if (location.pathname === "/home") {
      openModal("task");
    }

    if (location.pathname === "/notes") {
      openModal("note");
    }
  };

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
        to="/notes"
        className={({ isActive }) =>
          `nav-item ${isActive ? "active" : ""}`
        }
      >
        <RiStickyNoteFill />
        <span>Notes</span>
      </NavLink>

      {showAddButton && (
        <button
          className="add-button"
          onClick={handleAdd}
        >
          <RiAddLine />
        </button>
      )}

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