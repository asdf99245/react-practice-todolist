import React, { useContext } from 'react';
import styled from 'styled-components';
import { TodoStateContext } from '../TodoContext';

const TodoHeaderBox = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ff8787;
  height: 130px;
  color: #fff;
  h1 {
    margin: 0;
    font-size: 36px;
  }
  span {
    margin-top: 5px;
    font-size: 24px;
    font-weight: 500;
  }
`;

function TodoHeader() {
  const state = useContext(TodoStateContext);
  const left = state.filter((todo) => !todo.done);

  return (
    <TodoHeaderBox>
      <h1>TO DO LIST</h1>
      <span>{left.length}</span>
      TASKS LEFT
    </TodoHeaderBox>
  );
}

export default TodoHeader;
