import '@testing-library/jest-dom';
import { useUi } from './use.ui';
import { UiContext } from '../context/context';
import { renderHook, act } from '@testing-library/react';
import { mockUiContext } from '../mocks/ui.context.mock';

jest.mock('../config', () => ({
  url: '',
}));

interface WrapperProps {
  children: JSX.Element;
}

describe('Render useUi custom hook and testcomponent', () => {
  test('', async () => {
    const Wrapper = ({ children }: WrapperProps) => (
      <UiContext.Provider value={mockUiContext}>{children}</UiContext.Provider>
    );
    const { result } = renderHook(useUi, { wrapper: Wrapper });
    await act(async () => result.current.toggleTheme());

    expect(result.current.stateUi.mode).toBeFalsy();
  });

  test('', async () => {
    const Wrapper = ({ children }: WrapperProps) => (
      <UiContext.Provider value={mockUiContext}>{children}</UiContext.Provider>
    );
    const { result } = renderHook(useUi, { wrapper: Wrapper });
    result.current.stateUi.mode = false;
    await act(async () => result.current.toggleTheme());

    expect(result.current.stateUi.mode).toBeTruthy();
  });
});
