import { useContext } from 'react';
import { CharactersRepository } from '../services/characters.repo';
import { CharactersContext } from '../context/characters/CharactersContext';

export function useCharacters() {
  const repo = CharactersRepository();
  const { setCharacters } = useContext(CharactersContext)!;

  const getCharacters = async () => {
    const response = await repo.getAll();
    setCharacters(response);
  };

  return {
    getCharacters,
  };
}
