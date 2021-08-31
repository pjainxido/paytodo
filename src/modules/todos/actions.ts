import { createAction, createAsyncAction } from 'typesafe-actions';
import { Todo } from './types';

export const CREATE_TODO = 'todo/CREATE_TODO' as const;
export const DELETE_TODO = 'todo/DELETE_TODO' as const;
export const UPDATE_TODO = 'todo/UPDATE_TODO' as const;
export const CHECK_TODO = 'todo/CHECK_TODO' as const;

export const createTodo = createAction(CREATE_TODO)<Todo>();
export const deleteTodo = createAction(DELETE_TODO)<{ id: string }>();
export const updateTodo =
  createAction(UPDATE_TODO)<{ id: string; content: Todo }>();
export const checkTodo =
  createAction(CHECK_TODO)<{ id: string; isCheck: boolean }>();


export const ASYNC_GET_TODOLIST = 'todo/ASYNC_GET_TODOLIST' as const;
export const getTodoList = createAsyncAction