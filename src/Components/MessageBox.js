import React from "react";
import styled from "styled-components";

import MessageItem from "./MessageItem";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  display: flex;
  background-color: #9bbbd4;
  height: 70vh;
  margin-top: 6rem;
  padding-bottom: 4rem;
  overflow-y: scroll;
`;

function MessageBox({ messages }) {
  return (
    <Wrapper>
      {messages.map((message) => (
        <MessageItem message={message} key={message.id} />
      ))}
    </Wrapper>
  );
}

export default MessageBox;
