import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 6rem;
  width: 300%;
  border-bottom: 1px lightgrey solid;
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

function FriendsItem({ id, photo, name, text }) {
  return (
    <Wrapper>
      <>
        <ProfileImage src={photo} alt="프로필" />
        <ProfileText>
          <h3>{name}</h3>
          <p>{text}</p>
        </ProfileText>
      </>
    </Wrapper>
  );
}

export default FriendsItem;
