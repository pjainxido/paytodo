import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Modal, { IModal } from '../Modal';
import { useDispatch } from 'react-redux';
import { modifyTodoAsync } from 'modules/todos';
import { Todo } from 'modules/todos';
import { dateToString } from 'utils/common';

interface ITodoModifyModal extends IModal {
  todo: Todo;
}

const TodoModifyModal: React.FC<ITodoModifyModal> = ({
  visible,
  onClose,
  todo,
}) => {
  const { id, createdAt } = todo;
  const [todoContent, setTodoContent] = useState(todo.content);
  const dispatch = useDispatch();

  useEffect(() => {
    setTodoContent(todo.content);
  }, [todo]);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoContent(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    saveContent();
  };

  const saveContent = () => {
    //content가 값이 다를경우에만 실행
    if (todo.content !== todoContent) {
      dispatch(modifyTodoAsync.request({ id: id, content: todoContent }));
      onClose();
    }
  };

  return (
    <Modal visible={visible} onClose={onClose}>
      <ContainerForm onSubmit={handleSubmit}>
        <Label>content</Label>
        <ContentInput
          onChange={handleInput}
          value={todoContent}
          placeholder="input todo content"
          required
        />
        <Label>created At</Label>
        <DateLabel>{dateToString(createdAt)}</DateLabel>
        <SaveButton type="submit">save</SaveButton>
      </ContainerForm>
    </Modal>
  );
};

const ContainerForm = styled.form`
  width: 400px;
`;

const Label = styled.div``;

const ContentInput = styled.input`
  display: block;
  width: 100%;
  border: none;
  border-bottom: 1px solid #bfbfbf;
  box-sizing: border-box;
  font-family: poppins;
  font-weight: 700;
  font-size: 17px;
  transition: 0.3s ease;
  -moz-transition: 0.3s ease;
  -webkit-transition: 0.3s ease;
  -o-transition: 0.3s ease;
  -ms-transition: 0.3s ease;
  padding-bottom: 5px;
  -webkit-appearance: none;
  background: 0 0;
`;
const DateLabel = styled.div``;
const SaveButton = styled.button``;

export default TodoModifyModal;
