import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Modal, { IModal } from '../Modal';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import { modifyTodoAsync } from 'modules/todos';
import { Todo } from 'modules/todos';
import { dateToString } from 'utils/common';
import {SubmitButton, ContentInput, Label} from 'styles/common';

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
        <Label>
          생성일
          <DateLabel>{dateToString(createdAt)}</DateLabel>
        </Label>
        <SubmitButton type="submit">
          <FontAwesomeIcon icon={faSave} />
        </SubmitButton>
      </ContainerForm>
    </Modal>
  );
};

const ContainerForm = styled.form`
  width: 400px;
`;

const DateLabel = styled.span`
  margin-left: 20px;
`;

export default TodoModifyModal;
