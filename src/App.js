import React, { useState, useRef, useCallback } from "react";
import styled from "styled-components";
import GlobalStyle from "./Asset/GlobalStyle";

import Template from "./Components/Template";
import TopBar from "./Components/TopBar";
import Profile from "./Components/Profile";
import MessageBox from "./Components/MessageBox";
import Insert from "./Components/Insert";

function App() {
  // 시간 추가
  const [messages, setMessages] = useState([
    { id: 1, text: "안녕 나는 어피치야", isMe: false },
    { id: 2, text: "안녕 나는 네오야", isMe: true },
    { id: 3, text: "만나서 반가워!", isMe: false },
  ]);

  const nextId = useRef(4);

  const onInsert = useCallback(
    (text) => {
      const message = {
        id: nextId.current,
        text,
        checked: true,
      };
      setMessages(messages.concat(message));
      nextId.current += 1;
    },
    [messages]
  );

  return (
    <>
      <GlobalStyle />
      <Template>
        <TopBar />
        <Profile />
        <MessageBox />
        <Insert onInsert={onInsert} />
      </Template>
    </>
  );
}

export default App;
