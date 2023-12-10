import { Race, Gender, Affiliation } from '../models/character.types';
import { PlanetMock } from './planet.mock';
import { Character } from '../models/character.types';

export const mockCharacters: Character[] = [
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
    comments: [],
  },
];

export const characterMock = {
  id: '10',
  name: 'test',
  ki: '20',
  maxKi: '3000',
  race: 'Human' as Race,
  gender: 'Male' as Gender,
  description: 'Description test',
  image: 'image.png',
  affiliation: 'Z Fighter' as Affiliation,
  originPlanet: PlanetMock,
  transformations: [],
  comments: [],
};
