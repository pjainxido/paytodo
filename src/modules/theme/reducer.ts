import { createReducer } from 'typesafe-actions';

import { ThemeAction, ThemeState } from './types';
import { TOGGLE_THEME } from './actions';

//theme 초기 state
const initialState: ThemeState = {
  theme: 'light',
};

//theme reducer
const reducer = createReducer<ThemeState, ThemeAction>(initialState, {
  [TOGGLE_THEME]: (state) => ({
    ...state,
    theme: state.theme === 'light' ? 'dark' : 'light',
  }),
});


export default reducer;