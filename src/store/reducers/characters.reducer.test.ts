import { characterState, charactersReducer } from './characters.reducer';
import { Character } from '../../models/character.types';
import { charactersActions } from '../actions/characters.actions';

const initialState: characterState = {
  characters: [],
  character: undefined,
  links: {
    next: '',
    previous: '',
  },
  meta: {
    totalPages: 1,
  },
};

describe('characters reducer', () => {
  describe('when the action is recognized', () => {
    test('should return the state', () => {
      const characters: Character[] = [];
      const action = {
        type: charactersActions.load,
        payload: characters,
      };
      const state = charactersReducer(initialState, action);

      expect(state.characters).toEqual(characters);
    });

    test('should return the state', () => {
      const characters: Character[] = [];
      const action = {
        type: charactersActions.loadById,
        payload: characters,
      };
      const state = charactersReducer(initialState, action);

      expect(state.characters).toEqual(characters);
    });

    test('should return the default state ', () => {
      const characters: Character[] = [];
      const action = {
        type: '',
        payload: characters,
      };

      const state = charactersReducer(initialState, action);

      expect(state.characters).toEqual(characters);
    });
  });
});
