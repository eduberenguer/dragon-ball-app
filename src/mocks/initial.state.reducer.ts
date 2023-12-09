import { characterState } from '../store/reducers/characters.reducer';
import { favouriteState } from '../store/reducers/favourites.reducer';

export const initialStateCharacters: characterState = {
  characters: [],
  character: undefined,
  links: {
    next: '',
    previous: '',
  },
  meta: {
    totalPages: 1,
  },
};

export const initialStateFavourites: favouriteState = {
  favourites: [],
};

export const initialStateUi = {
  mode: 'light',
};
