import '@testing-library/jest-dom';
import { useUi } from './use.ui';
import { UiContext } from '../context/context';
import { renderHook, act } from '@testing-library/react';
import { mockUiContext } from '../mocks/ui.context.mock';
import { Props } from '../context/provider.types';

jest.mock('../config', () => ({
  url: '',
}));

describe('Render useUi custom hook and testcomponent', () => {
  test('should render component with toggleTheme (true => false)', async () => {
    const Wrapper = ({ children }: Props) => (
      <UiContext.Provider value={mockUiContext}>{children}</UiContext.Provider>
    );
    const { result } = renderHook(useUi, { wrapper: Wrapper });
    await act(async () => result.current.toggleTheme());

    expect(result.current.stateUi.mode).toBeFalsy();
  });

  test('should render component with toggleTheme (false => true)', async () => {
    const Wrapper = ({ children }: Props) => (
      <UiContext.Provider value={mockUiContext}>{children}</UiContext.Provider>
    );
    const { result } = renderHook(useUi, { wrapper: Wrapper });
    result.current.stateUi.mode = false;
    await act(async () => result.current.toggleTheme());

    expect(result.current.stateUi.mode).toBeTruthy();
  });
});
