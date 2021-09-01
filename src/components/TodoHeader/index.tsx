import styled from 'styled-components';
import { dateToString } from 'utils/common';

const TodoHeader = () => {
  return (
    <Container>
      <DateContainer>{dateToString(new Date())}</DateContainer>
      <Title>PayTodo</Title>
    </Container>
  );
};

const Container = styled.div`
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: #616473;
`;
const DateContainer = styled.div`
  color: #5a5d6c;
`;
const Title = styled.h1`
  font-size: 20px;
`;

export default TodoHeader;
