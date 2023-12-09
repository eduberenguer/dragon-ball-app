import { createContext } from 'react';
import { Props } from './provider.types';
import { useCharacters } from '../hooks/use.characters';
import { useFavourites } from '../hooks/use.favourites';
import { useUi } from '../hooks/use.ui';
import { createCharactersRepository } from '../services/characters.repo';

type UseCharacterStructured = ReturnType<typeof useCharacters>;
type UseFavouritesStructured = ReturnType<typeof useFavourites>;
type UseUiStructured = ReturnType<typeof useUi>;

export const CharactersContext = createContext({} as UseCharacterStructured);
export const FavouritesContext = createContext({} as UseFavouritesStructured);
export const UiContext = createContext({} as UseUiStructured);

export const ContextProvider = ({ children }: Props) => {
  const repo = createCharactersRepository();
  const contextCharacters = useCharacters(repo);
  const contextFavourite = useFavourites();
  const contextUi = useUi();

  return (
    <CharactersContext.Provider value={contextCharacters}>
      <FavouritesContext.Provider value={contextFavourite}>
        <UiContext.Provider value={contextUi}>{children}</UiContext.Provider>
      </FavouritesContext.Provider>
    </CharactersContext.Provider>
  );
};
