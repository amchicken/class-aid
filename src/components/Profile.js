import React from "react";

const Profile = ({ name }) => {
  return (
    <div className="nav-profile">
      {name}
      <img src="https://via.placeholder.com/30" alt="avatar" />
    </div>
  );
};

export default Profile;
