import { UseFavouritesStructured } from '../context/context';
import { mockCharacter } from './character.mock';

export const mockFavouritesContext: UseFavouritesStructured = {
  stateFavourites: {
    favourites: [mockCharacter],
  },
  loadFavourites: jest.fn(),
  toggleFavourite: jest.fn(),
  addComment: jest.fn(),
} as unknown as UseFavouritesStructured;
