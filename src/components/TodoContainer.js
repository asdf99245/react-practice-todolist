import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 480px;
  min-height: 680px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: #f5f5f5;
  margin: 0 auto;
  margin-top: 20px;
  overflow: hidden;
  box-shadow: 0px 1px 10px #373737;
`;

function TodoContainer({ children }) {
  return <Container>{children}</Container>;
}

export default TodoContainer;
