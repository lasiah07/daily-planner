import "./BottomNavigation.css";
import {
  RiHome5Fill,
  RiCheckboxCircleFill,
  RiStickyNoteFill,
  RiBarChartFill,
  RiUser3Fill,
} from "react-icons/ri";

function BottomNavigation() {
  return (
    <nav className="bottom-nav">

      <button className="nav-item active">
        <RiHome5Fill />
        <span>Home</span>
      </button>

      <button className="nav-item">
        <RiCheckboxCircleFill />
        <span>Planning</span>
      </button>

      <button className="nav-item">
        <RiStickyNoteFill />
        <span>Notes</span>
      </button>

      <button className="nav-item">
        <RiBarChartFill />
        <span>Tracking</span>
      </button>

      <button className="nav-item">
        <RiUser3Fill />
        <span>Profile</span>
      </button>

    </nav>
  );
}

export default BottomNavigation;