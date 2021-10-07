import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Content = styled.div``;

function Template({ children }) {
  return (
    <Container>
      <Content>{children}</Content>
    </Container>
  );
}

export default Template;
