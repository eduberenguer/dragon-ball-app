import { Planet } from './planetTypes';

export type Transformations {
  id: number;
  name: string;
  description: string;
  image: string;
  ki: number;
}

export type Character {
  id: number;
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
}
