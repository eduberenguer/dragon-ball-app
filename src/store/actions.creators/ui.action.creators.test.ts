import { uiActions } from '../actions/ui.actions';
import { toggleMode } from './ui.action.creators';

describe('Given the ui actions creator', () => {
  describe('When called the function toggleMode', () => {
    test('Then it should return an object with the proper type and payload', () => {
      const element = toggleMode(true);
      const result = {
        type: uiActions.visiblityMode,
        payload: true,
      };

      expect(element).toEqual(result);
    });
  });
});
