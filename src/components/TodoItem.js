import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import {
  MdClear,
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdArrowDropDown,
  MdArrowDropUp,
} from 'react-icons/md';
import { TodoDispatchContext } from '../TodoContext';

const TodoItemBox = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  font-size: 20px;
`;
const TodoItemText = styled.div`
  cursor: pointer;
  flex: 1;
  font-size: 16px;
  color: #373737;
  ${(props) =>
    props.done &&
    css`
      color: rgba(0, 0, 0, 0.2);
      text-decoration: line-through;
    `}
`;

const TodoItemCheckBox = styled.div`
  cursor: pointer;
  margin-right: 20px;
  display: flex;
  align-items: center;
`;

const TodoItemButton = styled.button`
  cursor: pointer;
  font-size: 18px;
  &:hover {
    color: #ff8787;
  }
  border: none;
  outline: none;
  background-color: transparent;
  display: flex;
  align-items: center;
`;

function TodoItem({ id, done, text }) {
  const dispatch = useContext(TodoDispatchContext);

  const onRemove = () => {
    dispatch({ type: 'REMOVE_TODO', id });
  };

  const onToggle = () => {
    dispatch({ type: 'TOGGLE_TODO', id });
  };

  const onMoveUp = () => {
    dispatch({
      type: 'MOVE_UP_TODO',
      todo: {
        id,
        text,
        done,
      },
    });
  };
  const onMoveDown = () => {
    dispatch({
      type: 'MOVE_DOWN_TODO',
      todo: {
        id,
        text,
        done,
      },
    });
  };

  return (
    <TodoItemBox>
      <TodoItemCheckBox onClick={onToggle}>
        {done ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
      </TodoItemCheckBox>
      <TodoItemText onClick={onToggle} done={done}>
        {text}
      </TodoItemText>
      <TodoItemButton onClick={onMoveUp}>
        <MdArrowDropUp />
      </TodoItemButton>
      <TodoItemButton onClick={onMoveDown}>
        <MdArrowDropDown />
      </TodoItemButton>
      <TodoItemButton onClick={onRemove}>
        <MdClear />
      </TodoItemButton>
    </TodoItemBox>
  );
}

export default React.memo(TodoItem);
