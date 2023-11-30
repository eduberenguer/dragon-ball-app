import { createContext, useState } from 'react';
import { Character } from '../../types/characterTypes';
import { CharactersContextType } from './charactersContextProviderTypes';

export const CharactersContext = createContext<CharactersContextType | null>(
  null
);

export const CharactersContextProvider = ({ children }: any) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [characters, setCharacters] = useState<Character[]>([]);

  return (
    <CharactersContext.Provider
      value={{ currentPage, setCurrentPage, characters, setCharacters }}
    >
      {children}
    </CharactersContext.Provider>
  );
};
