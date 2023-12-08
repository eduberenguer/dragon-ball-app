import { charactersActions } from './characters.actions';
import { Character } from '../models/character.types';

export interface CharacterActions {
  type: string;
  payload?: Character | Character[];
}

export const loadCharacters = (payload: Character[]): CharacterActions => {
  return {
    type: charactersActions.load,
    payload,
  };
};

export const loadCharacterById = (payload: Character): CharacterActions => {
  return {
    type: charactersActions.loadById,
    payload,
  };
};
