import { useRef, useEffect } from "react";
import styled from "styled-components";
import moment from "moment";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Row = styled.div``;

function TopBar() {
  const currentTime = moment().format("HH:mm");

  return (
    <Wrapper>
      <Row>{currentTime}</Row>
      <Row>LTE</Row>
    </Wrapper>
  );
}

export default TopBar;
