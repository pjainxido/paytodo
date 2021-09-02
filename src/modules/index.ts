import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import todos, { todoSaga } from './todos';
import filter from './filter';

const rootReducer = combineReducers({
  todos,
  filter
});


export type RootState = ReturnType<typeof rootReducer>;
export function* rootSaga() {
  yield all([todoSaga()]);
}

export default rootReducer;