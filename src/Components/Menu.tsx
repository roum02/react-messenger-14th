import React from "react";
import { Link } from "react-router-dom";

import User from "../Asset/user.png";
import ChatBubble from "../Asset/speech-bubble.png";
import Setting from "../Asset/setting.png";

import styled from "styled-components";

const MenuBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(66, 54, 48);
  width: 5rem;
  height: 100vh;
`;

const ImgBox = styled.img`
  width: 3rem;
  margin-top: 1rem;
  display: flex;
`;

const Menu = () => {
  return (
    <>
      <MenuBox>
        <Link to="/">
          <ImgBox src={User} />
        </Link>
        <Link to="/chatPage">
          <ImgBox src={ChatBubble} />
        </Link>
        <Link to="/settings">
          <ImgBox src={Setting} />
        </Link>
      </MenuBox>
    </>
  );
};

export default Menu;
