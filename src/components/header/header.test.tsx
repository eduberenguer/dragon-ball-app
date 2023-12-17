import '@testing-library/jest-dom';
import { MemoryRouter as Router } from 'react-router-dom';
import { Header } from './header';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CharactersContext, UiContext } from '../../context/context';
import { mockCharactersContext } from '../../mocks/characters.context.mock';
import { mockUiContext } from '../../mocks/ui.context.mock';

jest.mock('../../config', () => ({
  url: '',
}));

beforeEach(() => {
  render(
    <Router>
      <CharactersContext.Provider value={mockCharactersContext}>
        <UiContext.Provider value={mockUiContext}>
          <Header />
        </UiContext.Provider>
      </CharactersContext.Provider>
    </Router>
  );
});

describe('Header component', () => {
  test('', async () => {
    const img = screen.getAllByRole('img');
    await userEvent.click(img[0]);

    expect(mockCharactersContext.getCharacters).toHaveBeenCalled();
  });

  test("Then it should show a Link with text 'Dragon ball'", () => {
    const isLogo = screen.getByRole('button');
    expect(isLogo).toBeInTheDocument();
  });

  test('', async () => {
    render(
      <Router initialEntries={['/favourites']}>
        <Header />
      </Router>
    );
    const button = screen.getAllByRole('buttonStateMode');
    await userEvent.click(button[0]);
    const mode = mockUiContext.stateUi?.mode;

    expect(mode).toBeTruthy();
  });
});
