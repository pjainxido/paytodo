import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { deleteTodoAsync, checkTodoAsync } from 'modules/todos';
import { Todo } from 'modules/todos';
import { dateToString } from 'utils/common';

interface TodoItemProps {
  item: Todo;
  openTodoModal: (i: Todo) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ item, openTodoModal }) => {
  const { id, content, isCheck, createdAt } = item;
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteTodoAsync.request({ id: id }));
  };
  const handleCheckBox = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.checked);
    dispatch(checkTodoAsync.request({ id: id, isCheck: e.target.checked }));
  };
  return (
    <Container>
      <input type="checkbox" checked={isCheck} onChange={handleCheckBox} />
      <div>{content}</div>
      <div>{dateToString(createdAt)}</div>
      <DeleteButton onClick={handleDelete}>지우기</DeleteButton>
      <ModifyButton onClick={() => openTodoModal(item)}>수정</ModifyButton>
    </Container>
  );
};

const Container = styled.div`
  padding: 5px;
`;

const DeleteButton = styled.button``;
const ModifyButton = styled.button``;

export default TodoItem;
