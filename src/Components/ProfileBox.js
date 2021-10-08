import React from "react";
import ProfileItem from "./ProfileItem";

function ProfileBox({ messages, users, onToggle, bool }) {
  return (
    <>
      {/* {users.map((user) => (
        <ProfileItem
          key={user.id}
          // user={user}
          onToggle={onToggle}
          bool={bool}
        />
      ))} */}
      {messages.map((message) => (
        <ProfileItem
          key={message.id}
          // user={user}
          message={message}
          onToggle={onToggle}
          bool={bool}
        />
      ))}
    </>
  );
}

export default ProfileBox;
