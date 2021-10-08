import React from "react";
import ProfileItem from "./ProfileItem";

function ProfileBox({ users, onToggle }) {
  return (
    <>
      {users.map((user) => (
        <ProfileItem user={user} key={user.id} onToggle={onToggle} />
      ))}
    </>
  );
}

export default ProfileBox;
