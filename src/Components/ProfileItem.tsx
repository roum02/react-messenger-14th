import React from "react";
import styled from "styled-components";

import Apeach from "../Asset/Apeach.jpg";
import Neo from "../Asset/Neo.jpg";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 6rem;
  width: 100%;
  background-color: #9bbbd4;
  box-shadow: 0px 8px 10px #556677;
  position: absolute;
  z-index: 99;
`;

const ProfileImage = styled.img`
  display: flex;
  border-radius: 50px;
  width: 5rem;
  height: 5rem;
  object-fit: cover;
  margin-left: 1rem;
`;

const ProfileText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 1rem;
  p,
  h3 {
    margin: 0px;
  }
`;

type ProfileItemProps = {
  message: { id: number; text: string; isMe: boolean };
  onToggle: () => void;
  bool: boolean;
};

function ProfileItem({ message, onToggle, bool }: ProfileItemProps) {
  // const { id, text, isMe } = message;
  return (
    <Wrapper onClick={() => onToggle()}>
      {bool ? (
        <>
          <ProfileImage src={Apeach} alt="프로필" />
          <ProfileText>
            <h3>어피치</h3>
            <p>현재 활동 중</p>
          </ProfileText>
        </>
      ) : (
        <>
          <ProfileImage src={Neo} alt="프로필" />
          <ProfileText>
            <h3>네오</h3>
            <p>현재 활동 중</p>
          </ProfileText>
        </>
      )}
    </Wrapper>
  );
}

export default ProfileItem;