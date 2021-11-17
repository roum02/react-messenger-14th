import React from "react";
import ProfileItem from "./ProfileItem";

type ProfileBoxProps = {
  messages: { id: number; text: string; isMe: boolean }[];
  onToggle: () => void;
  bool: boolean;
};

function ProfileBox({ messages, onToggle, bool }: ProfileBoxProps) {
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
