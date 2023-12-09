import { favouritesActions } from '../actions/favourites.actions';
import { Character } from '../../models/character.types';

export interface FavouriteActions {
  type: string;
  payload?: Character | Character[];
}

export const loadFavourites = (payload: Character[]): FavouriteActions => {
  return {
    type: favouritesActions.loadFavourites,
    payload,
  };
};

export const addFavourite = (
  payload: Character | undefined
): FavouriteActions => {
  return {
    type: favouritesActions.addFoFavourite,
    payload,
  };
};

export const removeFavourite = (
  payload: Character | undefined
): FavouriteActions => {
  return {
    type: favouritesActions.removeFavourite,
    payload,
  };
};
