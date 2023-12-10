import { UiState, uiReducer } from './ui.reducer';
import { uiActions } from '../actions/ui.actions';

const initialState: UiState = {
  mode: false,
};

describe('ui reducer', () => {
  describe('when the action is recognized', () => {
    test('should return the state in change mode', () => {
      const mode: boolean = true;
      const action = {
        type: uiActions.visiblityMode,
        payload: mode,
      };

      const state = uiReducer(initialState, action);

      expect(state.mode).toEqual(mode);
    });
    test('should return the default state ', () => {
      const mode: boolean = false;
      const action = {
        type: '',
        payload: mode,
      };

      const state = uiReducer(initialState, action);

      expect(state.mode).toEqual(mode);
    });
  });
});
