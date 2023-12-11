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

describe('Given a characters reducer', () => {
  describe("When it's rendered", () => {
    test('should return the state with load action', () => {
      const characters: Character[] = [];
      const action = {
        type: charactersActions.load,
        payload: characters,
      };
      const state = charactersReducer(initialState, action);

      expect(state.characters).toEqual(characters);
    });

    test('should return the state with loadById action', () => {
      const characters: Character[] = [];
      const action = {
        type: charactersActions.loadById,
        payload: characters,
      };
      const state = charactersReducer(initialState, action);

      expect(state.characters).toEqual(characters);
    });

    test('should return the state with loadCharactersByOptions action', () => {
      const characters: Character[] = [];
      const action = {
        type: charactersActions.loadCharactersByOptions,
        payload: characters,
      };
      const state = charactersReducer(initialState, action);

      expect(state.characters).toEqual(characters);
    });

    test('should return the state with changeTransformationPhoto action', () => {
      const characters: Character[] = [];
      const action = {
        type: charactersActions.changeTransformationPhoto,
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
