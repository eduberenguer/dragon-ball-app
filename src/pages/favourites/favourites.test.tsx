import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Favourites from './favourites';
import { FavouritesContext } from '../../context/context';
import { mockFavouritesContext } from '../../mocks/favourites.context.mock';
import { MemoryRouter as Router } from 'react-router-dom';

jest.mock('../../config', () => ({
  url: '',
}));

describe('Given a favourites component', () => {
  beforeEach(() => {
    render(
      <Router>
        <FavouritesContext.Provider value={mockFavouritesContext}>
          <Favourites />
        </FavouritesContext.Provider>
      </Router>
    );
  });

  test('render the component', () => {
    const headingElement = screen.getByText('Favoritos');
    expect(headingElement).toBeInTheDocument();
  });

  test('renders the list of favourite characters', () => {
    mockFavouritesContext.stateFavourites.favourites.forEach((character) => {
      const characterName = screen.getByText(character.name);
      expect(characterName).toBeInTheDocument();
    });
  });
});
