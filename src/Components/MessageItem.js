import React from "react";
import styled from "styled-components";

import Apeach from "../Asset/Apeach.jpg";
import Neo from "../Asset/Neo.jpg";

const MyContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 1rem;
`;

const YourContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-right: 1rem;
`;

const MyText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  border-radius: 10px 10px 0px 10px;
  background-color: #fef01b;
  border: 5px;
  height: 3rem;
  width: 13rem;
`;

const YourText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  border-radius: 10px 10px 10px 0px;
  background-color: white;
  border: 5px;
  height: 3rem;
  width: 13rem;
`;

const ProfileImage = styled.img`
  display: flex;
  border-radius: 50px;
  width: 3rem;
  height: 3rem;
  object-fit: cover;
  margin-left: 1rem;
`;

function MessageItem({ message }) {
  const { id, text, isMe } = message;
  return (
    <>
      {isMe ? (
        <MyContainer>
          <MyText>{text}</MyText>
          <ProfileImage src={Apeach} alt="프로필" />
        </MyContainer>
      ) : (
        <YourContainer>
          <ProfileImage src={Neo} alt="프로필" />
          <YourText>{text}</YourText>
        </YourContainer>
      )}
    </>
  );
}

export default MessageItem;