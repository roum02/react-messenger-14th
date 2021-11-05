import React, { useState, useRef } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./Asset/GlobalStyle";
import styled from "styled-components";

import ChatPage from "./Pages/ChatPage";
import FriendsPage from "./Pages/FriendsPage";

function App() {
  return (
    <Router>
      <Routes>
        <GlobalStyle />
        <Route path="/" element={<FriendsPage />} />
        <Route path="/chatPage" element={<ChatPage />} />
      </Routes>
    </Router>
  );
}

export default App;
