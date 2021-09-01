import { createAction, createAsyncAction } from 'typesafe-actions';
import { Todo } from './types';

import {
  GetTodoListResponseType,
  GetTodoListParamType,
  PostTodoCreateParamType,
  PostTodoCreateResponseType,
  PostTodoCheckParamType,
  PostTodoCheckResponseType,
  PostTodoDeleteParamType,
  PostTodoDeleteResponseType,
  PostTodoModifyParamType,
  PostTodoModifyResponseType,
} from 'api/todo/type';

export const LOAD_TODO = 'todo/LOAD_TODO' as const;
export const CREATE_TODO = 'todo/CREATE_TODO' as const;
export const DELETE_TODO = 'todo/DELETE_TODO' as const;
export const CHECK_TODO = 'todo/CHECK_TODO' as const;
export const MODIFY_TODO = 'todo/MODIFY_TODO' as const;

export const loadTodo = createAction(LOAD_TODO)<Todo[] | null>();
export const createTodo =
  createAction(CREATE_TODO)<PostTodoCreateResponseType>();
export const deleteTodo = createAction(DELETE_TODO)<PostTodoDeleteParamType>();
export const checkTodo =
  createAction(CHECK_TODO)<{ id: string; isCheck: boolean }>();
export const modifyTodo =
  createAction(MODIFY_TODO)<{ id: string; content: string }>();

export const GET_TODOLIST = 'todo/GET_TODOLIST' as const;
export const GET_TODOLIST_SUCCESS = 'todo/GET_TODOLIST_SUCCESS' as const;
export const GET_TODOLIST_ERROR = 'todo/GET_TODOLIST_ERROR' as const;
export const ASYNC_GET_TODOLIST = 'todo/ASYNC_GET_TODOLIST' as const;
export const getTodoListAsync = createAsyncAction(
  GET_TODOLIST,
  GET_TODOLIST_SUCCESS,
  GET_TODOLIST_ERROR
)<GetTodoListParamType, GetTodoListResponseType, Error>();

export const POST_CREATE_TODO = 'todo/POST_CREATE_TODO' as const;
export const POST_CREATE_TODO_SUCCESS =
  'todo/POST_CREATE_TODO_SUCCESS' as const;
export const POST_CREATE_TODO_ERROR = 'todo/POST_CREATE_TODO_ERROR' as const;
export const ASYNC_CREATE_TODO = 'todo/ASYNC_POST_CREAT_TODO' as const;
export const createTodoAsync = createAsyncAction(
  POST_CREATE_TODO,
  POST_CREATE_TODO_SUCCESS,
  POST_CREATE_TODO_ERROR
)<PostTodoCreateParamType, PostTodoCheckResponseType, Error>();

export const POST_CHECK_TODO = 'todo/POST_CHECK_TODO' as const;
export const POST_CHECK_TODO_SUCCESS = 'todo/POST_CHECK_TODO_SUCCESS' as const;
export const POST_CHECK_TODO_ERROR = 'todo/POST_CHECK_TODO_ERROR' as const;
export const ASYNC_CHECK_TODO = 'todo/ASYNC_CHECK_TODO' as const;
export const checkTodoAsync = createAsyncAction(
  POST_CHECK_TODO,
  POST_CHECK_TODO_SUCCESS,
  POST_CHECK_TODO_ERROR
)<PostTodoCheckParamType, PostTodoCheckResponseType, Error>();

export const POST_DELETE_TODO = 'todo/POST_DELETE_TODO' as const;
export const POST_DELETE_TODO_SUCCESS =
  'todo/POST_DELETE_TODO_SUCCESS' as const;
export const POST_DELETE_TODO_ERROR = 'todo/POST_DELETE_TODO_ERROR' as const;
export const ASYNC_DELETE_TODO = 'todo/ASYNC_DELETE_TODO' as const;
export const deleteTodoAsync = createAsyncAction(
  POST_DELETE_TODO,
  POST_DELETE_TODO_SUCCESS,
  POST_DELETE_TODO_ERROR
)<PostTodoDeleteParamType, PostTodoDeleteResponseType, Error>();

export const POST_MODIFY_TODO = 'todo/POST_MODIFY_TODO' as const;
export const POST_MODIFY_TODO_SUCCESS =
  'todo/POST_MODIFY_TODO_SUCCESS' as const;
export const POST_MODIFY_TODO_ERROR = 'todo/POST_MODIFY_TODO_ERROR' as const;
export const ASYNC_MODIFY_TODO = 'todo/ASYNC_MODIFY_TODO' as const;
export const modifyTodoAsync = createAsyncAction(
  POST_MODIFY_TODO,
  POST_MODIFY_TODO_SUCCESS,
  POST_MODIFY_TODO_ERROR
)<PostTodoModifyParamType, PostTodoModifyResponseType, Error>();
