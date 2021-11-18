import { useState, useCallback } from "react";
import styled from "styled-components";

const InsertBox = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  box-shadow: 0px 8px 10px #556677;
  background-color: white;
  width: 97%;
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
  margin: 1rem 3rem 1rem 1rem;
  border: none;
  outline: none;
  &:hover {
    background: gold;
  }
`;

type onInsertProps = {
  onInsert: (text: string) => void;
};

function Insert({ onInsert }: onInsertProps) {
  const [value, setValue] = useState<string>("");
  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  const onSubmit = useCallback(
    (e) => {
      value ? onInsert(value) : alert("공백 입력은 불가합니다.");

      setValue("");
      e.preventDefault();
    },
    [onInsert, value]
  );

  return (
    <InsertBox onSubmit={onSubmit}>
      <Input
        placeholder="메시지를 입력하세요"
        value={value}
        onChange={onChange}
      />
      <Button type="submit">전송</Button>
    </InsertBox>
  );
}

export default Insert;
