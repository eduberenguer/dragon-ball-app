import { Character } from '../models/character.types';
import { charactersActions } from './characters.actions';
import { CharacterActions } from './characters.action.creator';

export type characterState = {
  characters: Character[];
  character: Character | null;
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
        character: null,
      };
    case charactersActions.loadById:
      return {
        ...state,
        character: action.payload as Character,
      };
    default:
      return state;
  }
};
