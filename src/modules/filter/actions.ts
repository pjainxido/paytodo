import {createAction} from 'typesafe-actions';

export const TOGGLE_FILTER= 'filter/TOGGLE_FILTER' as const;


export const toggleFilter= createAction(TOGGLE_FILTER)();