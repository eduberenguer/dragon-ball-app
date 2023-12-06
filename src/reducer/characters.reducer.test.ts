import { characterState, charactersReducer } from './characters.reducer';
import { Character } from '../models/characterTypes';
import { charactersActions } from './characters.actions';

const initialState: characterState = {
  characters: [],
};

describe('characters reducer', () => {
  describe('when the action is not recognized', () => {
    test('should return the state', () => {
      const characters: Character[] = [];
      const action = {
        type: charactersActions.load,
        payload: characters,
      };
      const state = charactersReducer(initialState, action);

      expect(state.characters).toEqual(characters);
    });
  });
});
