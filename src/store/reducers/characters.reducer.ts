import { Character } from '../../models/character.types';
import { charactersActions } from '../actions/characters.actions';
import { CharacterActions } from '../actions.creators/characters.action.creator';

export type characterState = {
  characters: Character[];
  character: Character | undefined;
  links: {
    next: '';
    previous: '';
  };
  meta: {
    totalPages: 1;
  };
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
        character: undefined,
      };
    case charactersActions.loadById:
      return {
        ...state,
        character: action.payload as Character,
      };
    case charactersActions.loadCharactersByOptions:
      return {
        ...state,
        characters: action.payload as Character[],
      };
    case charactersActions.changeTransformationPhoto:
      return {
        ...state,
        character: action.payload as Character,
      };
    default:
      return state;
  }
};
