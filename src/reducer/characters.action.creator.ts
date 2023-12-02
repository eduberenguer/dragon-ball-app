import { charactersActions } from './characters.actions';
import { Character } from '../models/characterTypes';

interface Action {
  type: string;
  payload?: any;
}

export interface CharacterActions extends Action {
  payload: Character | Character[];
}

export const loadCharacterCreator = (
  payload: Character[]
): CharacterActions => {
  return {
    type: charactersActions.load,
    payload,
  };
};
