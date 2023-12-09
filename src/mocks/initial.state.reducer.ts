import { characterState } from '../store/reducers/characters.reducer';
import { favouritesState } from '../store/reducers/favourites.reducer';

export const initialStateCharacters: characterState = {
  characters: [],
  character: null,
  links: {
    next: '',
    previous: '',
  },
  meta: {
    totalPages: 1,
  },
};

export const initialStateFavourites: favouritesState = {
  favourites: [],
};
