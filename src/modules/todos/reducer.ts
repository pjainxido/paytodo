import { createReducer } from 'typesafe-actions';
import { uuidv4 } from 'utils/common';

import { Todo, TodoListAction, TodoListState } from './types';
import {
  CREATE_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  CHECK_TODO,
  LOAD_TODO,
} from './actions';

const mockTodoItem: Todo = {
  id: uuidv4(),
  content: 'todo mock',
  isCheck: false,
  createdAt: new Date(),
};

const initialState: TodoListState = {
  todos: [],
};

const reducer = createReducer<TodoListState, TodoListAction>(initialState, {
  [LOAD_TODO]: (state, action) => {
    console.log(action.payload);
    // action.payload?.map((item)=> item.createdAt )
    return { ...state, todos: action.payload || [mockTodoItem] };
  },
  [CREATE_TODO]: (state, action) => {
    console.log(action.payload);
    const todoItem = JSON.parse(action.payload.msg);
    console.log(todoItem);
    const tmp: Todo = {
      id:todoItem.id,
      content: todoItem.content,
      isCheck: todoItem.isCheck,
      createdAt: todoItem.createdAt,
    };
    return {
      ...state,
      todos: [...state.todos, tmp],
    };
  },
  [UPDATE_TODO]: (state, action) => {
    const { id, content } = action.payload;
    return {
      ...state,
      todos: state.todos.map((todo) => (todo.id === id ? content : todo)),
    };
  },
  [DELETE_TODO]: (state, action) => {
    const { id } = action.payload;
    return { ...state, todos: state.todos.filter((todo) => todo.id !== id) };
  },
  [CHECK_TODO]: (state, action) => {
    const { id, isCheck } = action.payload;
    return {
      ...state,
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, isCheck: isCheck } : todo
      ),
    };
  },
});

export default reducer;
