import { useReducer } from 'react';
import { CharactersRepository } from '../services/characters.repo';
import {
  charactersReducer,
  characterState,
} from '../reducer/characters.reducer';
import * as ac from '../reducer/characters.action.creator';

export function useCharacters({ repo = CharactersRepository() } = {}) {
  const initialState: characterState = {
    characters: [],
  };

  const [stateCharacters, dispatch] = useReducer(
    charactersReducer,
    initialState
  );

  const getCharacters = async () => {
    const data = await repo.getAll();
    dispatch(ac.loadCharacterCreator(data));
  };

  return {
    stateCharacters,
    getCharacters,
  };
}
