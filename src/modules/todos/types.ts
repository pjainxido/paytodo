import {ActionType} from 'typesafe-actions';
import * as actions from './actions';

export type Todo = {
  id: string;
  content: string;
  isCheck: boolean;
  createdAt: Date;
}

export interface TodoListState{
  todos: Todo[],
}

export type TodoListAction = ActionType<typeof actions>;