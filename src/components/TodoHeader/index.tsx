import styled from 'styled-components';
import { dateToString } from 'utils/common';

const TodoHeader = () => {
  return (
    <Container>
      <Title>PayTodo</Title>
      <DateContainer>{dateToString(new Date())}</DateContainer>
    </Container>
  );
};

const Container = styled.div`
  color: #616473;
`;
const DateContainer = styled.div`
  color: #5a5d6c;
`;
const Title = styled.h1`
  font-size: 20px;
`;

export default TodoHeader;
