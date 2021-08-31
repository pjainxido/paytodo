import styled from 'styled-components';
import { Todo } from 'modules/todos/types';
import TodoItem from './TodoItem';

interface TodoListProps {
  todoItemList: Todo[];
  title: string;
}

const TodoListColumn: React.FC<TodoListProps> = ({ todoItemList, title}) => {
  return (
    <Container>
      <h2>{title}</h2>
      <div>
        {todoItemList.map((item, index) => {
          return <TodoItem item={item} key={index} />;
        })}
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 400px;

`


export default TodoListColumn;
