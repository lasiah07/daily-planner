import "./Profile.css";

import { useNavigate } from "react-router-dom";

import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import SettingItem from "../../components/SettingItem/SettingItem";
import SectionCard from "../../components/SectionCard/SectionCard";

import {
  RiPaletteLine,
  RiNotification3Line,
  RiInformationLine,
  RiHistoryLine,
  RiFireFill,
} from "react-icons/ri";

function Profile() {

  const navigate = useNavigate();

  const user = {
    name: "Guest",
    bio: "Organize your day beautifully.",
    avatar: null,
  };

  return (

    <div className="profile-page">

      <ProfileHeader user={user} />

      <SectionCard title="Activity">

        <SettingItem
          icon={<RiFireFill />}
          title="Routine Tracker"
          subtitle="Manage your daily routines"
          onClick={() => navigate("/routine")}
        />

        <SettingItem
          icon={<RiHistoryLine />}
          title="Activity History"
          subtitle="View completed activities"
          onClick={() => navigate("/history")}
        />

      </SectionCard>

      <SectionCard title="Preferences">

        <SettingItem
          icon={<RiPaletteLine />}
          title="Appearance"
          subtitle="Theme and colors"
        />

        <SettingItem
          icon={<RiNotification3Line />}
          title="Notifications"
          subtitle="Reminder settings"
        />

      </SectionCard>

      <SectionCard title="About">

        <SettingItem
          icon={<RiInformationLine />}
          title="About Planora"
          subtitle="Version, credits and licenses"
        />

      </SectionCard>

      <p className="version">
        Planora v1.0.0
      </p>

    </div>

  );

}

export default Profile;