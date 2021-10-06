import React, { useContext } from 'react';
import styled from 'styled-components';
import { TodoStateContext } from '../TodoContext';
import TodoItem from './TodoItem';

const TodoListBox = styled.ul`
  margin: 0;
  flex: 1;
  padding: 20px;
`;

function TodoList() {
  const state = useContext(TodoStateContext);

  return (
    <TodoListBox>
      {state.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          done={todo.done}
          text={todo.text}
        />
      ))}
    </TodoListBox>
  );
}

export default TodoList;
