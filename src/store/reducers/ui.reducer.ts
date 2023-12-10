import { uiActions } from '../actions/ui.actions';
import { UiActions } from '../actions.creators/ui.action.creators';

export type UiState = {
  mode: boolean;
};

export const uiReducer = (state: UiState, action: UiActions): UiState => {
  switch (action.type) {
    case uiActions.visiblityMode:
      return {
        ...state,
        mode: action.payload,
      };
    default:
      return state;
  }
};
