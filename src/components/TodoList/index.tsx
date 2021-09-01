import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { uuidv4 } from 'utils/common';
import { RootState } from 'modules';
import useModal from 'utils/hooks/useModal';
import { getTodoListAsync, Todo } from 'modules/todos';
import TodoItem from './TodoItem';
import { LOCALSTORAGE_KEY } from 'utils/constants';
import TodoModifyModal from 'components/common/Modal/TodoModifyModal';
import TodoHeader from 'components/TodoHeader';
import TodoCreateModal from 'components/common/Modal/TodoCreateModal';

const defaultTodo: Todo = {
  id: uuidv4(),
  content: 'todo mock',
  isCheck: false,
  createdAt: new Date(),
};

const TodoList = () => {
  const [modalVisible, openModal, closeModal] = useModal(false);
  const [createVisible, openCreate, closeCreate] = useModal(false);
  const [modifyTodo, setModifyTodo] = useState<Todo | null>(null);
  const { todos } = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();

  const openTodoModal = (item: Todo) => {
    console.log(item);
    setModifyTodo(item);
    openModal();
  };

  useEffect(() => {
    dispatch(getTodoListAsync.request({ key: LOCALSTORAGE_KEY }));
  }, [dispatch]);

  return (
    <>
      <Container>
        <TodoHeader />
        <TodoListContainer>
          {todos.map((item, index) => {
            return (
              <TodoItem item={item} key={index} openTodoModal={openTodoModal} />
            );
          })}
        </TodoListContainer>
        <CreateModalButton onClick={openCreate}>+</CreateModalButton>
      </Container>
      <TodoCreateModal visible={createVisible} onClose={closeCreate} />
      <TodoModifyModal
        visible={modalVisible}
        onClose={closeModal}
        todo={modifyTodo || defaultTodo}
      />
    </>
  );
};

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 360px;
  height: auto;
  border-radius: 5%;

  background-color: #fff;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

const TodoListContainer = styled.div`
  overflow: scroll;
  height: 450px;
  padding-bottom: 100px;
`;

const CreateModalButton = styled.button`
  display: inline-block;
  text-decoration: none;
  background: #87befd;
  color: #fff;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  text-align: center;
  vertical-align: middle;
  overflow: hidden;
  transition: 0.4s;
  border: none;
  position: relative;
  left: 50%;
  transform: translateX(-50%) translateY(50%);
  &:hover{
    background: #668ad8;
  }
  font-size: 40px;
`;

export default TodoList;
