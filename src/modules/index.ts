import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import todos, { todoSaga } from './todos';

const rootReducer = combineReducers({
  todos,
});


export type RootState = ReturnType<typeof rootReducer>;
export function* rootSaga() {
  yield all([todoSaga()]);
}

export default rootReducer;