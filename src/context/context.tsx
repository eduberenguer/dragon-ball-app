import { createContext } from 'react';
import { Props } from './provider.types';
import { useCharacters } from '../hooks/use.characters';
import { useFavourites } from '../hooks/use.favourites';
import { createCharactersRepository } from '../services/characters.repo';

type UseCharacterStructured = ReturnType<typeof useCharacters>;
type UseFavouritesStructured = ReturnType<typeof useFavourites>;

export const CharactersContext = createContext({} as UseCharacterStructured);
export const FavouritesContext = createContext({} as UseFavouritesStructured);

export const ContextProvider = ({ children }: Props) => {
  const repo = createCharactersRepository();
  const contextCharacters = useCharacters(repo);
  const contextFavourite = useFavourites();

  return (
    <CharactersContext.Provider value={contextCharacters}>
      <FavouritesContext.Provider value={contextFavourite}>
        {children}
      </FavouritesContext.Provider>
    </CharactersContext.Provider>
  );
};
