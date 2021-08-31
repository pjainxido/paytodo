import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { RootState } from 'modules';
import { TodoState } from 'modules/todos';
import { dateToString } from 'utils/common';
import TodoListColumn from './TodoListColumn';

interface TodoListProps {
  title: string;
}

const TodoKanban= () => {
  const { todos } = useSelector((state: RootState) => state.todos);

  const todo = todos.filter((item) => item.state === TodoState.TODO);
  const inProgress = todos.filter(
    (item) => item.state === TodoState.INPROGRESS
  );
  const done = todos.filter((item) => item.state === TodoState.DONE);

  return (
    <Container>
      <TodoListColumn title='Todo' todoItemList={todo} />
      <TodoListColumn title='In Progress' todoItemList={inProgress} />
      <TodoListColumn title='Done' todoItemList={done} />
    </Container>
  );
};

const Container = styled.div`
display: flex;
`;

export default TodoKanban;
