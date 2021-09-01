import { LOCALSTORAGE_KEY } from '../../utils/constants';
import {
  GetTodoListResponseType,
  PostTodoCreateParamType,
  PostMsgResponseType,
  PostTodoModifyParamType,
  PostContentResponseType,
  PostTodoCheckParamType,
  PostTodoDeleteParamType,
  GetTodoListParamType,
  PostTodoDeleteResponseType,
} from './type';
import { getLocalStorage, saveLocalStorage, uuidv4 } from 'utils/common';
import { Todo } from 'modules/todos';

//api 함수내의 localStorage 관련로직은 backend내 db crud 대신해 작성

export async function apiGetTodoList() {
  // const response = await fetch(`${BASE_URL}/todo`);
  const localDB = getLocalStorage(LOCALSTORAGE_KEY);
  if (!localDB) saveLocalStorage(LOCALSTORAGE_KEY, []);
  const responseData: GetTodoListResponseType = {
    code: 200,
    count: localDB?.length || 0,
    todoList: localDB || [],
  };
  return responseData;
}

export async function apiCreateTodo(input: PostTodoCreateParamType) {
  // const response = await fetch(`${BASE_URL}/todo`, {content: }).;
  //api logic
  const localDB = getLocalStorage(LOCALSTORAGE_KEY) || [];
  const newTodo: Todo = {
    id: uuidv4(),
    content: input.content,
    isCheck: false,
    createdAt: new Date(),
  };
  localDB.push(newTodo);
  saveLocalStorage(LOCALSTORAGE_KEY, localDB);
  const msg = JSON.stringify(newTodo);
  const responseData: PostMsgResponseType = {
    code: 200,
    msg: msg,
  };
  return responseData;
}

export async function apiModifyTodo(input: PostTodoModifyParamType) {
  const responseData: PostContentResponseType = {
    code: 200,
    msg: 'modify!',
    content: `id : ${input.id} - ${input.content}`,
  };
  return responseData;
}

export async function apiCheckTodo(input: PostTodoCheckParamType) {
  const localDB = getLocalStorage(LOCALSTORAGE_KEY);
  if (localDB) {
    saveLocalStorage(
      LOCALSTORAGE_KEY,
      localDB.map((todo) =>
        todo.id === input.id ? { ...todo, isCheck: input.isCheck } : todo
      )
    );
  }
  const responseData: PostMsgResponseType = {
    code: 200,
    msg: 'checked!',
  };
  return responseData;
}

export async function apiDeleteTodo(input: PostTodoDeleteParamType) {
  const localDB = getLocalStorage(LOCALSTORAGE_KEY);
  if (localDB) {
    saveLocalStorage(
      LOCALSTORAGE_KEY,
      localDB.filter((todo) => todo.id !== input.id)
    );
  }
  const responseData: PostTodoDeleteResponseType = {
    code: 200,
    msg: `delete ${input.id}`,
  };
  return responseData;
}
