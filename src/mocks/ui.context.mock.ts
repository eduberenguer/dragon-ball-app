import { UseUiStructured } from '../context/context';

export const mockUiContext: UseUiStructured = {
  stateUi: {
    mode: true,
  },
  toggleTheme: jest.fn(),
} as unknown as UseUiStructured;
