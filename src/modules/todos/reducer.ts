import { createReducer } from 'typesafe-actions';
import { uuidv4 } from 'utils/common';

import { Todo, TodoListAction, TodoListState } from './types';
import { CREATE_TODO, UPDATE_TODO, DELETE_TODO, CHECK_TODO } from './actions';


const mockTodoItem: Todo = {
  id: uuidv4(),
  content: 'todo mock',
  isCheck: false,
  createdAt: new Date(),
};

const initialState: TodoListState = {
  todos: [mockTodoItem, mockTodoItem],
};

const reducer = createReducer<TodoListState, TodoListAction>(initialState, {
  [CREATE_TODO]: (state, action) => ({
    ...state,
    todos: [...state.todos, action.payload],
  }),
  [UPDATE_TODO]: (state, action) => {
    const { id, content } = action.payload;
    let matchItemKey: string = '';
    for (const item in state) {
    }
    return { ...state, [matchItemKey]: action.payload };
  },
  [DELETE_TODO]: (state, action) => {
    const { id } = action.payload;
    return { ...state };
  },
  [CHECK_TODO]: (state, action) => {
    const { id, isCheck } = action.payload;

    return { ...state };
  },
});

export default reducer;
