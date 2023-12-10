import { useReducer } from 'react';
import { uiReducer } from '../store/reducers/ui.reducer';
import { initialStateUi } from '../mocks/initial.state.reducer';
import * as ac from '../store/actions.creators/ui.action.creators';

export const useUi = () => {
  const [stateUi, dispatch] = useReducer(uiReducer, initialStateUi);

  const toggleTheme = () => {
    if (stateUi.mode) {
      dispatch(ac.toggleMode({ mode: false }));
      return;
    }
    dispatch(ac.toggleMode({ mode: true }));
  };

  return {
    toggleTheme,
    stateUi,
  };
};
