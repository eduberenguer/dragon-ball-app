import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Favourites } from './favourites';
import { FavouritesContext } from '../../context/context';

jest.mock('../../config', () => ({
  url: '',
}));

describe('Favourites', () => {
  beforeEach(() => {
    render(
      <FavouritesContext.Provider
        value={{
          stateFavourites: { favourites: [] },
          loadFavourites: () => {},
          toggleFavourite: () => {},
          addComment: () => {},
        }}
      >
        <Favourites />
      </FavouritesContext.Provider>
    );
  });

  test('renders the component', () => {
    const headingElement = screen.getByText('Favoritos');
    expect(headingElement).toBeInTheDocument();
  });
});
