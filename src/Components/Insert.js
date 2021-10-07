import React from "react";
import styled from "styled-components";

const InsertBox = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1rem;
  box-shadow: 0px 8px 10px #556677;
  background-color: white;
  height: 7rem;
`;
const Input = styled.input`
  outline: none;
  border: none;
  width: 23rem;
  height: 3rem;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fef01b;
  height: 3rem;
  width: 4rem;
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
