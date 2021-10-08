import React, { useState, useRef, useCallback } from "react";
import GlobalStyle from "./Asset/GlobalStyle";

import Template from "./Components/Template";
import TopBar from "./Components/TopBar";
import ProfileBox from "./Components/ProfileBox";
import MessageBox from "./Components/MessageBox";
import Insert from "./Components/Insert";

function App() {
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

  const onInsert = useCallback(
    (text) => {
      const message = {
        id: nextId.current,
        text,
        isMe: bool,
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
        <ProfileBox messages={messages} onToggle={onToggle} bool={bool} />
        <MessageBox messages={messages} />
        <Insert onInsert={onInsert} bool={bool} />
      </Template>
    </>
  );
}

export default App;
