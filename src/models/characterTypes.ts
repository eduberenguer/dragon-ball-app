import { Planet } from './planetTypes';

export type Transformations = {
  id: string;
  name: string;
  description: string;
  image: string;
  ki: number;
};

export type Character = {
  id: string;
  name: string;
  ki: string;
  maxKi: string;
  race: string;
  gender: string;
  description: string;
  image: string;
  affiliation: string;
  originPlanet: Planet;
  transformations: Transformations[];
};
