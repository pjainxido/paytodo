import TodoCreateModal from 'components/common/Modal/TodoCreateModal';
import styled from 'styled-components';
import useModal from 'utils/hooks/useModal';

const TodoHeader = () => {
  const [createVisible, openCreate, closeCreate] = useModal(false);
  return (
    <Container>
      <Title>PayTodo</Title>
      <TodoCreateModal visible={createVisible} onClose={closeCreate} />
      <CreateModalButton onClick={openCreate}>버튼</CreateModalButton>
    </Container>
  );
};

const Container = styled.div``;
const Title = styled.h1``;
const CreateModalButton = styled.button``;

export default TodoHeader;
