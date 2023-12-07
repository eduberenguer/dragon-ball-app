import { useReducer } from 'react';
import {
  charactersReducer,
  characterState,
} from '../reducer/characters.reducer';
import * as ac from '../reducer/characters.action.creator';
import { Repository } from '../services/repository';
import { Character } from '../models/character.types';

export function useCharacters(repo: Repository<Character>) {
  const initialState: characterState = {
    characters: [],
  };

  const [stateCharacters, dispatch] = useReducer(
    charactersReducer,
    initialState
  );

  const getCharacters = async () => {
    const data = await repo.getAll();
    dispatch(ac.loadCharacters(data));
  };

  return {
    stateCharacters,
    getCharacters,
  };
}
