import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { uuidv4 } from 'utils/common';
import { RootState } from 'modules';
import { getTodoListAsync, Todo } from 'modules/todos';
import TodoItem from './TodoItem';
import { LOCALSTORAGE_KEY } from 'utils/constants';
import useModal from 'utils/hooks/useModal';
import TodoModifyModal from 'components/common/Modal/TodoModifyModal';

const TodoList = () => {
  const [modalVisible, openModal, closeModal] = useModal(false);
  const [modifyTodo, setModifyTodo] = useState<Todo | null>(null);
  const { todos } = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();

  const openTodoModal = (item: Todo) => {
    setModifyTodo(item);
    openModal();
  };

  const onLoadTodoListData = (key: string) => {
    dispatch(getTodoListAsync.request({ key }));
  };
  useEffect(() => {
    onLoadTodoListData(LOCALSTORAGE_KEY);
  }, []);

  return (
    <>
      <Container>
        {todos.map((item, index) => {
          return (
            <TodoItem item={item} key={index} openTodoModal={openTodoModal} />
          );
        })}
      </Container>
      <TodoModifyModal
        visible={modalVisible}
        onClose={closeModal}
        todo={
          modifyTodo || {
            id: uuidv4(),
            content: 'todo mock',
            isCheck: false,
            createdAt: new Date(),
          }
        }
      />
    </>
  );
};

const Container = styled.div`
  justify-content: center;
  align-items: center;
`;

export default TodoList;
