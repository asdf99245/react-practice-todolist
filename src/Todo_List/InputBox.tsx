import { useRef } from "react";
import styled from "styled-components";

const InputBox = (props: {
  curTodos: {
    data: string;
    checked: boolean;
  }[];
  handleTodos: React.Dispatch<
    React.SetStateAction<
      {
        data: string;
        checked: boolean;
      }[]
    >
  >;
}) => {
  const inputRef = useRef<any>(null);

  const handleClick = () => {
    props.handleTodos([
      ...props.curTodos,
      { data: inputRef.current.value, checked: false },
    ]);
    inputRef.current.value = null;
  };

  const onKeyPress = (e: any) => {
    if (e.key === "Enter") {
      props.handleTodos([
        ...props.curTodos,
        { data: e.target.value, checked: false },
      ]);
      e.target.value = null;
    }
  };

  return (
    <InputContainer>
      <input
        type="text"
        ref={inputRef}
        onKeyPress={onKeyPress}
        placeholder="할일 입력"
      ></input>
      <button onClick={handleClick}>입력</button>
    </InputContainer>
  );
};

export default InputBox;

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
