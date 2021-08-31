import { combineReducers } from 'redux';

import theme from './theme';
import todos from './todos'

const rootReducer = combineReducers({
  theme,
  todos
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
