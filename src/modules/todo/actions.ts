import { createAction } from 'typesafe-actions';
import { string } from 'yargs';
import {Todo} from './types';

export const CREATE_TODO = 'todo/CREATE_TODO' as const;
export const DELETE_TODO = 'todo/DELETE_TODO' as const;
export const UPDATE_TODO = 'todo/UPDATE_TODO' as const;
export const CHECK_TODO = 'todo/CHECK_TODO' as const;

export const createTodo = createAction(CREATE_TODO)<Todo>();
export const deleteTodo = createAction(DELETE_TODO)<string>();
export const updateTodo = createAction(UPDATE_TODO)<string, Todo>();
export const checkTodo = createAction(CHECK_TODO)<string, boolean>();

