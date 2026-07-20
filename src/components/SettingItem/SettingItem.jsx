import "./SettingItem.css";

import { RiArrowRightSLine } from "react-icons/ri";

function SettingItem({
  icon,
  title,
  subtitle,
  onClick,
}) {
  return (
    <button
      className="setting-item"
      onClick={onClick}
    >
      <div className="setting-left">

        <div className="setting-icon">
          {icon}
        </div>

        <div className="setting-content">

          <h4>{title}</h4>

          {subtitle && (
            <p>{subtitle}</p>
          )}

        </div>

      </div>

      <RiArrowRightSLine />

    </button>
  );
}

export default SettingItem;