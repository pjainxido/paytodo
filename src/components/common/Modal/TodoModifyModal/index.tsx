import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Modal, { IModal } from '../Modal';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import { modifyTodoAsync } from 'modules/todos';
import { Todo } from 'modules/todos';
import { dateToString } from 'utils/common';
import { SubmitButton, ContentInput, Label } from 'styles/common';

interface ITodoModifyModal extends IModal {
  todo: Todo;
}

const TodoModifyModal: React.FC<ITodoModifyModal> = ({
  visible,
  onClose,
  todo,
}) => {
  // const { id, createdAt } = useState(todo) ;
  const [modifiedTodo, setModifiedTodo] = useState<Todo>(todo);
  const { id, content, createdAt } = modifiedTodo;
  const dispatch = useDispatch();

  //todo값이 바뀔때마다 내부 todo State수정
  useEffect(() => {
    setModifiedTodo(todo);
  }, [todo]);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setModifiedTodo((prev) => ({ ...prev, content: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    saveContent();
  };

  //content submit시 호출
  const saveContent = () => {
    if (todo.content !== content) {
      dispatch(modifyTodoAsync.request({ id: id, content: content }));
      onClose();
    }
  };

  return (
    <Modal visible={visible} onClose={onClose}>
      <ContainerForm onSubmit={handleSubmit}>
        <Label>content</Label>
        <ContentInput
          onChange={handleInput}
          value={content}
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
