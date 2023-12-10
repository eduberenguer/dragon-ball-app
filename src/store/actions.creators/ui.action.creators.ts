import { uiActions } from '../actions/ui.actions';

export interface UiActions {
  type: string;
  payload: boolean;
}

export const toggleMode = (payload: boolean): UiActions => {
  return {
    type: uiActions.visiblityMode,
    payload,
  };
};
