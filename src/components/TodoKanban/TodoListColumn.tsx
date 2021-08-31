import { Todo } from 'modules/todo/types';
import TodoItem from './TodoItem';

interface TodoListProps {
  todoItemList: Todo[];
  name: string;
}

const TodoListColumn: React.FC<TodoListProps> = ({ todoItemList, name }) => {
  return (
    <div>
      <h2>{name}</h2>
      <div>
        {todoItemList.map((item, index) => {
          return <TodoItem item={item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default TodoListColumn;
