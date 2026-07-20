import "./ProfileMenu.css";
import { RiArrowRightSLine } from "react-icons/ri";

function ProfileMenu({
  icon,
  title,
  subtitle,
  onClick,
}) {
  return (
    <button
      className="profile-menu"
      onClick={onClick}
    >
      <div className="profile-left">

        <div className="profile-icon">
          {icon}
        </div>

        <div>

          <h4>{title}</h4>

          {subtitle && (
            <p>{subtitle}</p>
          )}

        </div>

      </div>

      <RiArrowRightSLine className="profile-arrow"/>

    </button>
  );
}

export default ProfileMenu;