import { createContext } from 'react';
import { Props } from './charactersContextProviderTypes';
import { useCharacters } from '../../hooks/useCharacters';
import { createCharactersRepository } from '../../services/characters.repo';

type UseCharacterStructured = ReturnType<typeof useCharacters>;

export const CharactersContext = createContext({} as UseCharacterStructured);

export const CharactersContextProvider = ({ children }: Props) => {
  const repo = createCharactersRepository();
  const context = useCharacters(repo);

  return (
    <CharactersContext.Provider value={context as any}>
      {children}
    </CharactersContext.Provider>
  );
};
