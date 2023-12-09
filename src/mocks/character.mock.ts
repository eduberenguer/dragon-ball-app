import { Race, Gender, Affiliation } from '../models/character.types';
import { PlanetMock } from './planet.mock';

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
};
