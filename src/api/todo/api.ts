import { LOCALSTORAGE_KEY } from '../../utils/constants';
import {
  GetTodoListResponseType,
  PostTodoCreateParamType,
  PostTodoModifyParamType,
  PostTodoCheckParamType,
  PostTodoDeleteParamType,
  PostTodoCreateResponseType,
  PostTodoDeleteResponseType,
  PostTodoModifyResponseType,
  PostTodoCheckResponseType,
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

//todo create시 호출되는 api responseData에 msg값으로 생성된 todo response
//해당 api 호출하는 saga에서 reponse.msg 파싱해 내부 state변경 action에 사용
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
  const responseData: PostTodoCreateResponseType= {
    code: 200,
    msg: msg,
  };
  return responseData;
}

//todo content 수정시 호출되는 api
export async function apiModifyTodo(input: PostTodoModifyParamType) {
  const localDB = getLocalStorage(LOCALSTORAGE_KEY) || [];
  saveLocalStorage(
    LOCALSTORAGE_KEY,
    localDB.map((todo) =>
      todo.id === input.id ? { ...todo, content: input.content } : todo
    )
  );

  const responseData: PostTodoModifyResponseType = {
    code: 200,
    msg: 'modify',
    content: input.content,
  };
  return responseData;
}

//todo isCheck 호출 api
export async function apiCheckTodo(input: PostTodoCheckParamType) {
  const localDB = getLocalStorage(LOCALSTORAGE_KEY) || [];
  saveLocalStorage(
    LOCALSTORAGE_KEY,
    localDB.map((todo) =>
      todo.id === input.id ? { ...todo, isCheck: input.isCheck } : todo
    )
  );
  const responseData: PostTodoCheckResponseType= {
    code: 200,
    msg: 'checked!',
  };
  return responseData;
}

//todo 삭제 api
export async function apiDeleteTodo(input: PostTodoDeleteParamType) {
  const localDB = getLocalStorage(LOCALSTORAGE_KEY) || [];
  saveLocalStorage(
    LOCALSTORAGE_KEY,
    localDB.filter((todo) => todo.id !== input.id)
  );
  const responseData: PostTodoDeleteResponseType = {
    code: 200,
    msg: `delete ${input.id}`,
  };
  return responseData;
}
