import React from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoContainer from './components/TodoContainer';
import TodoHeader from './components/TodoHeader';
import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';
import { TodoProvider } from './TodoContext';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    background:#dee2e6;
  }
`;

function App() {
  return (
    <TodoProvider>
      <GlobalStyle />
      <TodoContainer>
        <TodoHeader />
        <TodoCreate />
        <TodoList />
      </TodoContainer>
    </TodoProvider>
  );
}

export default App;
