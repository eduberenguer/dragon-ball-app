import { favouritesActions } from '../actions/favourites.actions';
import { Character } from '../../models/character.types';
import { loadFavourites } from './favourites.action.creator';

const mockFavourites: Character[] = [];

describe('Given the favourites actions creator', () => {
  describe('When called the function loadFavourites', () => {
    test('Then it should return an object with the proper type and payload', () => {});

    const element = loadFavourites(mockFavourites);

    const result = {
      type: favouritesActions.loadFavourites,
      payload: mockFavourites,
    };

    expect(element).toEqual(result);
  });
});
