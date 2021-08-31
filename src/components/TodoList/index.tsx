import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { RootState } from 'modules';
import { dateToString } from 'utils/common';
import TodoItem from './TodoItem';


const TodoList = () => {
  const { todos } = useSelector((state: RootState) => state.todos);

  return (
    <Container>
      {todos.map((item, index) => {
        return <TodoItem item={item} key={index} />;
      })}
    </Container>
  );
};

const Container = styled.div`
  justify-content: center;
  align-items: center;
`;

export default TodoList;
