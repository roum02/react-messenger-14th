import React, { useState, useRef } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "../Asset/GlobalStyle";
import styled from "styled-components";

import Template from "../Components/Template";
import TopBar from "../Components/TopBar";
import ProfileBox from "../Components/ProfileBox";
import MessageBox from "../Components/MessageBox";
import Insert from "../Components/Insert";
import Menu from "../Components/Menu";

const Wrapper = styled.div`
  display: flex;
`;

function ChatPage() {
  const [messages, setMessages] = useState([
    { id: 1, text: "안녕 나는 어피치야", isMe: true },
    { id: 2, text: "안녕 나는 네오야", isMe: false },
    { id: 3, text: "만나서 반가워!", isMe: true },
  ]);

  const [bool, SetBool] = useState(true);

  const nextId = useRef(4);

  const onToggle = (id) => {
    // setMessages(
    //   messages.map((message) =>
    //     message.id === id ? { ...message, isMe: !message.isMe } : message
    //   )
    // );
    SetBool(!bool);
  };

  const onInsert = (text) => {
    const message = {
      id: nextId.current,
      text,
      isMe: bool,
    };
    setMessages(messages.concat(message));
    nextId.current += 1;
  };

  return (
    <Wrapper>
      <GlobalStyle />
      <Menu />
      <Template>
        <TopBar />
        <ProfileBox messages={messages} onToggle={onToggle} bool={bool} />
        <MessageBox messages={messages} />
        <Insert onInsert={onInsert} bool={bool} />
      </Template>
    </Wrapper>
  );
}

export default ChatPage;
