import React from "react";
import styled from "styled-components";
import ProfileItem from "./ProfileItem";
import Apeach from "../Asset/Apeach.jpg";
import Neo from "../Asset/Neo.jpg";

const Wrapper = styled.div`
  /* display: flex;
  align-items: center;
  height: 6rem;
  width: 100%;
  background-color: #9bbbd4;
  box-shadow: 0px 8px 10px #556677;
  position: absolute;
  z-index: 99; */
`;

function ProfileBox({ users, onToggle }) {
  return (
    <Wrapper>
      {users.map((user) => (
        <ProfileItem user={user} key={user.id} onToggle={onToggle} />
      ))}
    </Wrapper>
  );
}

export default ProfileBox;
