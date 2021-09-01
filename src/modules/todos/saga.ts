import { call, put, takeLatest } from 'redux-saga/effects';
import { apiCheckTodo, apiCreateTodo, apiGetTodoList, apiDeleteTodo } from 'api/todo/api';
import {
  GetTodoListResponseType,
  GetTodoDataParamType,
  GetTodoDataResponseType,
  PostMsgResponseType,
  PostTodoCheckResponseType,
  PostTodoDeleteParamType,
  PostTodoDeleteResponseType,
} from 'api/todo/type';
import {
  createTodo,
  checkTodo,
  getTodoListAsync,
  loadTodo,
  GET_TODOLIST,
  createTodoAsync,
  POST_CREATE_TODO,
  checkTodoAsync,
  POST_CHECK_TODO,
  deleteTodo,
  deleteTodoAsync,
  POST_DELETE_TODO,
} from './actions';

//전체 리스트 get 호출 saga
function* getTodoListSaga(action: ReturnType<typeof getTodoListAsync.request>) {
  try {
    const response: GetTodoListResponseType = yield call(apiGetTodoList);
    yield put(getTodoListAsync.success(response));
    yield put(loadTodo(response.todoList));
  } catch (error) {
    yield put(getTodoListAsync.failure(error));
  }
}

//post create Todo 호출 saga
function* createTodoSaga(action: ReturnType<typeof createTodoAsync.request>) {
  try {
    const response: PostMsgResponseType = yield call(
      apiCreateTodo,
      action.payload
    );
    yield put(createTodoAsync.success(response));
    yield put(createTodo(response));
  } catch (error) {
    yield put(createTodoAsync.failure(error));
  }
}

//post check Todo saga
function* checkTodoSaga(action: ReturnType<typeof checkTodoAsync.request>) {
  try {
    const response: PostTodoCheckResponseType = yield call(
      apiCheckTodo,
      action.payload
    );
    yield put(checkTodoAsync.success(response));
    yield put(checkTodo(action.payload));
  } catch (error) {
    yield put(checkTodoAsync.failure(error));
  }
}

function* deleteTodoSaga(action: ReturnType<typeof checkTodoAsync.request>) {
  try {
    const response: PostTodoDeleteResponseType= yield call(
      apiDeleteTodo,
      action.payload
    );
    yield put(deleteTodoAsync.success(response));
    yield put(deleteTodo(action.payload));
  } catch (error) {
    yield put(checkTodoAsync.failure(error));
  }
}

export function* todoSaga() {
  yield takeLatest(POST_CREATE_TODO, createTodoSaga);
  yield takeLatest(POST_CHECK_TODO, checkTodoSaga);
  yield takeLatest(POST_DELETE_TODO, deleteTodoSaga);
  yield takeLatest(GET_TODOLIST, getTodoListSaga);
}

export { todoSaga as default };
