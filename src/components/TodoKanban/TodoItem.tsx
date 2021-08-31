import React from 'react';
import { Todo } from 'modules/todo';

interface TodoItemProps {
  item: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ item }) => {
  const { id, content, isCheck, createdAt, deadLine } = item;
  return (
    <div>
      <input type="check-box" checked={isCheck} />
      <div>{content}</div>
      <div>{deadLine}</div>
    </div>
  );
};

export default TodoItem;
