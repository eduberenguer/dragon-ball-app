import { uiActions } from '../actions/ui.actions';
import { UiActions } from '../actions.creators/ui.action.creators';

export type UiState = {
  mode: string;
};

export const uiReducer = (state: UiState, action: UiActions): UiState => {
  switch (action.type) {
    case uiActions.darkMode:
      return {
        ...state,
        mode: action.payload as string,
      };
    default:
      return state;
  }
};
