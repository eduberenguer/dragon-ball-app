import { charactersActions } from '../actions/characters.actions';
import {
  loadCharacters,
  loadCharacterById,
  loadCharactersByOptions,
  changeTransformationPhoto,
} from './characters.action.creator';
import { mockCharacters } from '../../mocks/character.mock';

describe('Given the characters actions creator', () => {
  describe('When called the function load', () => {
    test('then it should return an object with the proper type and payload (loadCharacters)', () => {
      const element = loadCharacters(mockCharacters);
      const result = {
        type: charactersActions.load,
        payload: mockCharacters,
      };

      expect(element).toEqual(result);
    }),
      test('then it should return an object with the proper type and payload (loadCharacterById)', () => {
        const element = loadCharacterById(mockCharacters[0]);
        const result = {
          type: charactersActions.loadById,
          payload: mockCharacters,
        };

        expect([element.payload]).toEqual(result.payload);
      }),
      test('then it should return an object with the proper type and payload (loadCharactersByOptions)', () => {
        const element = loadCharactersByOptions(mockCharacters[0]);
        const result = {
          type: charactersActions.loadCharactersByOptions,
          payload: mockCharacters,
        };

        expect([element.payload]).toEqual(result.payload);
      }),
      test('then it should return an object with the proper type and payload (changeTransformationPhoto)', () => {
        const element = changeTransformationPhoto(mockCharacters[0]);
        const result = {
          type: charactersActions.changeTransformationPhoto,
          payload: mockCharacters,
        };

        expect([element.payload]).toEqual(result.payload);
      });
  });
});
