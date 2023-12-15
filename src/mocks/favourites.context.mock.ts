import { UseFavouritesStructured } from '../context/context';

export const mockFavouritesContext: UseFavouritesStructured = {
  stateFavourites: {
    favourites: [],
  },
  loadFavourites: jest.fn(),
  toggleFavourite: jest.fn(),
  addComment: jest.fn(),
} as unknown as UseFavouritesStructured;
