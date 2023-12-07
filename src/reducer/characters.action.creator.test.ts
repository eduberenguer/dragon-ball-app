import { charactersActions } from './characters.actions';
import { loadCharacters } from './characters.action.creator';
import { Character } from '../models/character.types';

const mockCharacters: Character[] = [
  {
    id: '1',
    name: 'Goku',
    ki: '1000',
    maxKi: '60 mill',
    race: 'Saiyan',
    gender: 'Male',
    description: 'Description test',
    image:
      'https://res.cloudinary.com/dgtgbyo76/image/upload/v1699044374/hlpy6q013uw3itl5jzic.webp',
    affiliation: 'Z Fighter',
    originPlanet: {
      id: '1',
      name: 'Namek',
      isDestroyed: true,
      description: 'Test',
      image: 'tes image',
    },
    transformations: [],
  },
];

describe('Given the characters actions creator', () => {
  describe('When called the function load', () => {
    test('Then it should return an object with the proper type and payload', () => {
      const element = loadCharacters(mockCharacters);
      const result = {
        type: charactersActions.load,
        payload: mockCharacters,
      };

      expect(element).toEqual(result);
    });
  });
});
