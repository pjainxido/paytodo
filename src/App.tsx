import React from 'react';
import styled from 'styled-components';
import TodoHeader from 'components/TodoHeader';
import TodoList from 'components/TodoList';
import './App.css';

function App() {
  return (
    <AppContainer>
      <TodoHeader/>
      <TodoList/>
      
    </AppContainer>
  );
}

const AppContainer = styled.div`
  text-align: center;
`

export default App;
