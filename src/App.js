import React, { useState, useRef, useCallback } from "react";
import styled from "styled-components";
import GlobalStyle from "./Asset/GlobalStyle";

import Template from "./Components/Template";
import TopBar from "./Components/TopBar";
import ProfileBox from "./Components/ProfileBox";
import MessageBox from "./Components/MessageBox";
import Insert from "./Components/Insert";

function App() {
  // 시간 추가
  const [messages, setMessages] = useState([
    { id: 1, text: "안녕 나는 어피치야", isMe: true },
    { id: 2, text: "안녕 나는 네오야", isMe: false },
    { id: 3, text: "만나서 반가워!", isMe: true },
  ]);

  const [users, SetUsers] = useState([
    { id: 1, name: "어피치", isMe: true },
    { id: 2, name: "네오", isMe: false },
  ]);

  const nextId = useRef(4);

  const onInsert = useCallback(
    (text) => {
      const message = {
        id: nextId.current,
        text,
        isMe: true,
      };
      setMessages(messages.concat(message));
      nextId.current += 1;
    },
    [messages]
  );

  const onToggle = useCallback((id) => {
    SetUsers(
      users.map((user) =>
        user.id === id ? { ...user, isMe: !user.isMe } : user
      )
    );
  });

  return (
    <>
      <GlobalStyle />
      <Template>
        <TopBar />
        <ProfileBox users={users} onToggle={onToggle} />
        <MessageBox messages={messages} />
        <Insert onInsert={onInsert} />
      </Template>
    </>
  );
}

export default App;
