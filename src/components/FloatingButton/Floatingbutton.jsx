import "./FloatingButton.css";
import { RiAddFill } from "react-icons/ri";

function FloatingButton({ onClick }) {
  return (
    <button
      className="floating-button"
      onClick={onClick}
    >
      <RiAddFill />
    </button>
  );
}

export default FloatingButton;