import React, { useState } from 'react';
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
  const [content, setContent] = useState(todo.content);
  const dispatch = useDispatch();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const saveContent = () => {
    //content가 값이 다를경우에만 실행
    if (todo.content !== content) {
      dispatch(modifyTodoAsync.request({ id: id, content: content }));
      onClose();
    }
  };

  return (
    <Modal visible={visible} onClose={onClose}>
      <Container>
        <ContentInput onChange={handleInput} value={content} />
        <DateLabel>{dateToString(createdAt)}</DateLabel>
        <SaveButton onClick={saveContent}>save</SaveButton>
      </Container>
    </Modal>
  );
};

const Container = styled.div``;
const ContentInput = styled.input``;
const DateLabel = styled.div``;
const SaveButton = styled.div``;

export default TodoModifyModal;
