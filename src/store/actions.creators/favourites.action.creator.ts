import { favouritesActions } from '../actions/favourites.actions';
import { Character } from '../../models/character.types';

export interface FavouriteActions {
  type: string;
  payload?: Character | Character[] | string;
}

export interface CommentActions {
  type: string;
  payload: { id: string; comment: string };
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

export const addComment = (payload: { id: string; comment: string }) => {
  return {
    type: favouritesActions.addComment,
    payload,
  };
};
