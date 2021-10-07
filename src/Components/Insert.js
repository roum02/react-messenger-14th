import React from "react";
import styled from "styled-components";

const InsertBox = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  box-shadow: 0px 8px 10px #556677;
  background-color: white;
  width: 100%;
  height: 7rem;
  position: fixed;
  bottom: 0;
`;
const Input = styled.input`
  outline: none;
  border: none;
  width: 23rem;
  height: 3rem;
  margin: 1rem;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fef01b;
  height: 3rem;
  width: 4rem;
  margin: 1rem;
  border: none;
  outline: none;
  &:hover {
    background: gold;
  }
`;

function Insert() {
  return (
    <InsertBox>
      <Input placeholder="메시지를 입력하세요" />
      <Button type="submit">전송</Button>
    </InsertBox>
  );
}

export default Insert;
