import { Planet } from './planetTypes';
import { Transformations } from './tranformationsTypes';

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
