import React from 'react';
import styled from 'styled-components';
import { Todo } from 'modules/todos';
import { dateToString } from 'utils/common';

interface TodoItemProps {
  item: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ item }) => {
  const { id, content, isCheck, createdAt } = item;
  return (
    <Container>
      <input type="checkbox" checked={isCheck} />
      <div>{content}</div>
      <div>{dateToString(createdAt)}</div>
    </Container>
  );
};

const Container = styled.div`
padding: 5px;
border-radus: 5px;
`

export default TodoItem;
