import { uiActions } from '../actions/ui.actions';

export interface UiActions {
  type: string;
  payload?: any;
}

export const toggleMode = (payload: boolean): UiActions => {
  return {
    type: uiActions.darkMode,
    payload,
  };
};
