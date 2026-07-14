import "./BottomNavigation.css";
import {
  RiHome5Fill,
  RiStickyNoteFill,
  RiBarChartFill,
  RiUser3Fill,
  RiAddLine,
} from "react-icons/ri";

function BottomNavigation({ onAddClick }) {
  return (
    <nav className="bottom-nav">

      <button className="nav-item active">
        <RiHome5Fill />
        <span>Home</span>
      </button>

      <button className="nav-item">
        <RiStickyNoteFill />
        <span>Notes</span>
      </button>

      <button
        className="add-button"
        onClick={onAddClick}
      >
        <RiAddLine />
      </button>

      <button className="nav-item">
        <RiBarChartFill />
        <span>Insights</span>
      </button>

      <button className="nav-item">
        <RiUser3Fill />
        <span>Profile</span>
      </button>

    </nav>
  );
}

export default BottomNavigation;