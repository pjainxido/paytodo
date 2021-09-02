import { ActionType } from 'typesafe-actions';
import * as actions from './actions';


export interface FilterState {
  filterChecked: boolean;
}

export type FilterAction = ActionType<typeof actions>;