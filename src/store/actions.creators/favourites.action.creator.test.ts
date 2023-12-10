import { favouritesActions } from '../actions/favourites.actions';
import { Character } from '../../models/character.types';
import {
  addComment,
  addFavourite,
  loadFavourites,
  removeFavourite,
} from './favourites.action.creator';

const mockFavourites: Character[] = [];

describe('Given the favourites actions creator', () => {
  describe('When called the function loadFavourites', () => {
    test('Then it should return an object with the proper type and payload', () => {
      const element = loadFavourites(mockFavourites);
      const result = {
        type: favouritesActions.loadFavourites,
        payload: mockFavourites,
      };

      expect(element).toEqual(result);
    }),
      test('Then it should return an object with the proper type and payload', () => {
        const element = addFavourite(mockFavourites[0]);
        const result = {
          type: favouritesActions.addFoFavourite,
          payload: mockFavourites,
        };

        expect([element.payload]).toEqual(result.payload);
      }),
      test('Then it should return an object with the proper type and payload', () => {
        const element = removeFavourite(mockFavourites[0]);
        const result = {
          type: favouritesActions.removeFavourite,
          payload: mockFavourites,
        };

        expect([element.payload]).toEqual(result.payload);
      }),
      test('Then it should return an object with the proper type and payload', () => {
        const element = addComment({ id: '1', comment: 'test' });
        const result = {
          type: favouritesActions.addComment,
          payload: { id: '1', comment: 'test' },
        };

        expect(element).toEqual(result);
      });
  });
});
