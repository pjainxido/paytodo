import { createAction } from 'typesafe-actions';

export const TOGGLE_THEME = 'theme/TOGGLE_THEME' as const;

export const toggleTheme = createAction(TOGGLE_THEME)();
