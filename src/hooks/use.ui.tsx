import { useReducer } from 'react';
import { uiReducer } from '../store/reducers/ui.reducer';
import { initialStateUi } from '../mocks/initial.state.reducer';
import * as ac from '../store/actions.creators/ui.action.creators';

export const useUi = () => {
  const [stateUi, dispatch] = useReducer(uiReducer, initialStateUi);

  const toggleTheme = () => {
    console.log(stateUi.mode);
    if (stateUi.mode) {
      dispatch(ac.toggleMode(false));
      return;
    }
    dispatch(ac.toggleMode(true));
  };

  return {
    toggleTheme,
    stateUi,
  };
};
