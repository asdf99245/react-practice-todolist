import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { TodoDispatchContext } from '../TodoContext';
import { TodoIdContext } from './../TodoContext';

const CreateForm = styled.form`
  padding: 20px;
  display: flex;
  border-bottom: 2px solid #ffc9c9;
`;

const Input = styled.input`
  font-size: 16px;
  padding: 15px;
  border: 2px solid #ff8787;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  outline: none;
  width: 100%;
`;

const Button = styled.input.attrs({
  type: 'submit',
  value: 'ADD',
})`
  color: white;
  font-weight: 700;
  background-color: #ff8787;
  cursor: pointer;
  width: 60px;
  border: none;
  outline: none;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
`;

function TodoCreate() {
  const dispatch = useContext(TodoDispatchContext);
  const currentId = useContext(TodoIdContext);
  const [value, setValue] = useState('');

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (value === '') {
      return;
    }

    dispatch({
      type: 'ADD_TODO',
      todo: { id: currentId.current, text: value, done: false },
    });
    currentId.current += 1;
    setValue('');
  };

  return (
    <CreateForm onSubmit={onSubmit}>
      <Input
        autoFocus
        placeholder="할 일을 추가하세요 !"
        onChange={onChange}
        value={value}
      />
      <Button />
    </CreateForm>
  );
}

export default TodoCreate;
