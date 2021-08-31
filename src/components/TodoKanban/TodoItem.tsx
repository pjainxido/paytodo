import React from 'react';
import { Todo } from 'modules/todos';
import { dateToString } from 'utils/common';

interface TodoItemProps {
  item: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ item }) => {
  const { id, content, isCheck, createdAt, deadLine } = item;
  return (
    <div>
      <input type="checkbox" checked={isCheck} />
      <div>{content}</div>
      <div>{dateToString(deadLine)}</div>
    </div>
  );
};

export default TodoItem;
