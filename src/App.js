import React from "react";
import styled from "styled-components";
import GlobalStyle from "./Asset/GlobalStyle";
import Template from "./Components/Template";
import TopBar from "./Components/TopBar";
import Profile from "./Components/Profile";

function App() {
  return (
    <>
      <GlobalStyle />
      <Template>
        <TopBar />
        <Profile />
      </Template>
    </>
  );
}

export default App;
