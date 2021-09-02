import { createReducer } from 'typesafe-actions';

import { FilterState, FilterAction } from './types';
import { TOGGLE_FILTER } from './actions';

const initialState: FilterState = {
  filterChecked: false,
};

const reducer = createReducer<FilterState, FilterAction>(initialState, {
  [TOGGLE_FILTER]: (state) => ({
    ...state,
    filterChecked: !state.filterChecked,
  }),
});

export default reducer;
