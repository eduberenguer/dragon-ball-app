import { favouriteState, favouritesReducer } from './favourites.reducer';
import { Character } from '../../models/character.types';
import { favouritesActions } from '../actions/favourites.actions';
import { characterMock } from '../../mocks/character.mock';

const initialState: favouriteState = {
  favourites: [],
};

describe('favourits reducer', () => {
  describe('when the action is recognized', () => {
    test('should return the state in load', () => {
      const favourites: Character[] = [];
      const action = {
        type: favouritesActions.loadFavourites,
        payload: favourites,
      };

      const state = favouritesReducer(initialState, action);

      expect(state.favourites).toEqual(favourites);
    });

    test('should return the state in add favourite', () => {
      const favourite: Character = characterMock;
      const action = {
        type: favouritesActions.addFoFavourite,
        payload: favourite,
      };

      const state = favouritesReducer(initialState, action);

      expect(state.favourites[0]).toEqual(favourite);
    });

    test('should return the state in remove favourite', () => {
      const favourite: Character[] = [];
      const action = {
        type: favouritesActions.removeFavourite,
        payload: favourite,
      };

      const state = favouritesReducer(initialState, action);

      expect(state.favourites).toEqual(favourite);
    });

    test('should return the default state ', () => {
      const favourites: Character[] = [];
      const action = {
        type: '',
        payload: favourites,
      };

      const state = favouritesReducer(initialState, action);

      expect(state.favourites).toEqual(favourites);
    });
  });
});
