import { Planet } from './planetTypes';
import { Transformations } from './tranformationsTypes';

export type Race =
  | 'Human'
  | 'Saiyan'
  | 'Namekian'
  | 'Majin'
  | 'Frieza'
  | 'Race'
  | 'Android'
  | 'Jiren'
  | 'Race'
  | 'God'
  | 'Angel'
  | 'Evil'
  | 'Nucleico'
  | 'benigno'
  | 'Unknown';

type Gender = 'Male' | 'Female' | 'Unknown';

type Affiliation =
  | 'Z Fighter'
  | 'Red Ribbon Army'
  | 'Namekian'
  | 'Warrior'
  | 'Freelancer'
  | 'Army of Frieza'
  | 'Pride Troopers'
  | 'Assistant of Vermoud'
  | 'God Assistant of Beerus Villain'
  | 'Other';

export type Character = {
  id: string;
  name: string;
  ki: string;
  maxKi: string;
  race: Race;
  gender: Gender;
  description: string;
  image: string;
  affiliation: Affiliation;
  originPlanet: Planet;
  transformations: Transformations[];
};
