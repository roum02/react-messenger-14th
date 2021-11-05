import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import GlobalStyle from "../Asset/GlobalStyle";

const Wrapper = styled.div`
  display: flex;
`;

const MenuBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgb(66, 54, 48);
  width: 5rem;
  height: 100vh;
`;

const FriendsList = styled.div`
  padding-left: 1rem;
`;

const FriendsPage = () => {
  return (
    <Wrapper>
      <GlobalStyle />
      <MenuBox></MenuBox>
      <FriendsList>
        <h2>친구목록</h2>
      </FriendsList>
    </Wrapper>
  );
};

export default FriendsPage;
