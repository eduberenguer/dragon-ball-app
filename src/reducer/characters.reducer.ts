import { Character } from '../models/character.types';
import { charactersActions } from './characters.actions';
import { CharacterActions } from './characters.action.creator';

export type characterState = {
  characters: Character[];
};

export const charactersReducer = (
  state: characterState,
  action: CharacterActions
): characterState => {
  switch (action.type) {
    case charactersActions.load:
      return {
        ...state,
        characters: action.payload as Character[],
      };
    default:
      return state;
  }
};
