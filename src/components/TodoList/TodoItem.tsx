import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';
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

  //delete button 클릭시 호출
  const handleDelete = () => {
    dispatch(deleteTodoAsync.request({ id: id }));
  };

  //체크박스 조작시 호출 콜백
  const handleCheckBox = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(checkTodoAsync.request({ id: id, isCheck: e.target.checked }));
  };

  return (
    <Container value={isCheck}>
      <Content>{content}</Content>
      {/* <div>{dateToString(createdAt)}</div> */}
      <ButtonContainer>
        <DeleteButton onClick={handleDelete}>
          <FontAwesomeIcon icon={faTrashAlt} />
        </DeleteButton>
        <ModifyButton onClick={() => openTodoModal(item)}>
          <FontAwesomeIcon icon={faEdit} />
        </ModifyButton>
        <CheckBox type="checkbox" checked={isCheck} onChange={handleCheckBox} />
      </ButtonContainer>
    </Container>
  );
};

const Container = styled.div<IContainer>`
  display: flex;
  padding: 10px 15px 10px;
  align-items: center;
  justify-content: space-around;
  color: ${({ value }) => (value ? '#dcdee3' : '#616473')};
  button {
    color: ${({ value }) => (value ? '#dcdee3' : '#616473')};
  }
`;

interface IContainer {
  value: boolean;
}

const Content = styled.div`
  flex: 2 1 0%;
  font-size: 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

const CheckBox = styled.input`
  &[type='checkbox'] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    display: inline-block;
    width: 20px;
    height: 20px;
    padding: 3px;
    background-clip: content-box;
    border: 2px solid #bbbbbb;
    background-color: #e7e6e7;
    border-radius: 50%;
  }
  &[type='checkbox']:checked {
    background-color: #8ee5c2;
  }
`;
const DeleteButton = styled.button`
  padding: 4px;
  border: none;
  background: none;
`;
const ModifyButton = styled.button`
  padding: 4px;
  border: none;
  background: none;
`;

export default TodoItem;
