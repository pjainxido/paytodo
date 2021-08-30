import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type Theme = 'light' | 'dark';

export interface ThemeState {
  theme: Theme;
}

export type ThemeAction = ActionType<typeof actions>;