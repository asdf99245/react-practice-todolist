import { useState, useRef } from "react";
import styled from "styled-components";
import InputBox from "./InputBox";
import ListElement from "./ListElement";

const TodoList = () => {
  const [todos, setTodos] = useState([
    {
      data: "일어나기",
      checked: false,
    },
  ]);

  return (
    <Total>
      <h1>TodoList 만들기</h1>
      <ListElement curTodos={todos} handleTodos={setTodos} />
      <InputBox curTodos={todos} handleTodos={setTodos} />
    </Total>
  );
};
export default TodoList;

const Total = styled.div`
  display: flex;
  flex-direction: column;
`;
