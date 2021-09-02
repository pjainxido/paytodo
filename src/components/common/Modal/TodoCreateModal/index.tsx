import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import Modal, { IModal } from '../Modal';
import { useDispatch } from 'react-redux';
import { createTodoAsync } from 'modules/todos';
import {ContentInput, SubmitButton, Label} from 'styles/common';

interface ICreateModal extends IModal {}

const TodoCreateModal: React.FC<ICreateModal> = ({ visible, onClose }) => {
  const [content, setContent] = useState('');
  const dispatch = useDispatch();

  const handleContentInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(content);
    setContent('');
  };

  const onSubmit = (input: string) => {
    dispatch(createTodoAsync.request({ content: input }));
    onClose();
  };
  return (
    <Modal visible={visible} onClose={onClose}>
      <ContainerForm onSubmit={handleSubmit}>
        <Label>What to do..?</Label>
        <ContentInput
          name="content"
          value={content}
          onChange={handleContentInput}
          required
        />
        <SubmitButton type="submit">
          <FontAwesomeIcon icon={faPlusSquare} />
        </SubmitButton>
      </ContainerForm>
    </Modal>
  );
};

const ContainerForm = styled.form`
  width: 400px;
`;

export default TodoCreateModal;
