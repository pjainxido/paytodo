import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { dateToString } from 'utils/common';
import { RootState } from 'modules';
import { toggleFilter } from 'modules/filter';

const TodoHeader = () => {
  const { filterChecked } = useSelector((state: RootState) => state.filter);
  const dispatch = useDispatch();

  //toggle item 클릭시 호출
  const toggleHandle = () => {
    dispatch(toggleFilter());
  };

  return (
    <Container>
      <DateContainer>{dateToString(new Date())}</DateContainer>
      <Title>PayTodo</Title>
      <ToggleContainer>
        <ToggleLabel>filter check</ToggleLabel>
        <ToggleItem>
          <input
            type="checkbox"
            className="real-checkbox"
            onChange={toggleHandle}
            checked={filterChecked}
          />
          <div className="toggle-button"></div>
        </ToggleItem>
      </ToggleContainer>
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

const ToggleContainer = styled.div``;

const ToggleLabel = styled.div`
  font-size: 12px;
  margin-bottom: 3px;
`;

const ToggleItem = styled.label`
  display: inline-block;
  width: 50px;
  height: 25px;
  border: 3px solid #bfbebe;
  border-radius: 25px;
  position: relative;
  cursor: pointer;
  background-color: #f5f2f2;
  transition: border-color 300ms;

  .real-checkbox {
    position: absolute;
    clip: rect(0, 0, 0, 0);

    & + .toggle-button {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 25px;
      transition: all 300ms;

      &::before {
        content: '';
        cursor: pointer;
        display: inline-block;
        width: 25px;
        height: 25px;
        background-color: white;
        border-radius: 50%;
        box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
        transition: all 300ms ease-in-out;
      }
    }

    &:checked + .toggle-button {
      background-color: #8ee5c2;
      &::before {
        margin-left: 25px;
      }
    }
  }
`;

export default TodoHeader;
