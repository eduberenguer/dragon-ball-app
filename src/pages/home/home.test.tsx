import '@testing-library/jest-dom';
import { Home } from './home';
import { render, screen } from '@testing-library/react';
import { mockCharactersContext } from '../../mocks/characters.context.mock';
import { CharactersContext } from '../../context/context';
import { UiContext } from '../../context/context';
import { mockUiContext } from '../../mocks/ui.context.mock';
import { MemoryRouter as Router } from 'react-router-dom';

jest.mock('../../config', () => ({
  url: '',
}));

describe('Home component', () => {
  beforeAll(() => {
    render(
      <Router>
        <CharactersContext.Provider value={mockCharactersContext}>
          <UiContext.Provider value={mockUiContext}>
            <Home />
          </UiContext.Provider>
        </CharactersContext.Provider>
      </Router>
    );
  });

  test('should render the home component', () => {
    const characterName = screen.getByText('Goku');
    expect(characterName).toBeInTheDocument();
  });
});
