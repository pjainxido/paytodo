import { createReducer } from 'typesafe-actions';

import { TodoListAction, TodoListState } from './types';
import { CREATE_TODO, UPDATE_TODO, DELETE_TODO, CHECK_TODO } from './actions';

const initialState: TodoListState = {
  todo: [],
  inProgress: [],
  done: [],
};

const reducer = createReducer<TodoListState, TodoListAction>(initialState, {
  [CREATE_TODO]: (state, action) => ({
    ...state,
    todo: [...state.todo, action.payload],
  }),
  [UPDATE_TODO]: (state, action) => {
    let matchItemKey: string = '';
    for (const item in state) {
    }
    return { ...state, [matchItemKey]: action.payload };
  },
  [DELETE_TODO]: (state, action) => {
    return { ...state };
  },
  [CREATE_TODO]: (state, action) => {
    return { ...state };
  },
});

export default reducer;
