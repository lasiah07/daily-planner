import "./ProfileHeader.css";

import {
  RiUser3Fill,
} from "react-icons/ri";

function ProfileHeader({ user }) {

  return (

    <div className="profile-header">

      <div className="avatar">

        {user.avatar ? (

          <img
            src={user.avatar}
            alt={user.name}
          />

        ) : (

          <RiUser3Fill />

        )}

      </div>

      <h2>{user.name}</h2>

      <p>{user.bio}</p>

    </div>

  );

}

export default ProfileHeader;