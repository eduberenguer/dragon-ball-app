import { Character } from '../../models/character.types';
import { favouritesActions } from '../actions/favourites.actions';
import { FavouriteActions } from '../actions.creators/favourites.action.creator';

export type favouriteState = {
  favourites: Character[];
};

export const favouritesReducer = (
  state: favouriteState,
  action: FavouriteActions
): favouriteState => {
  switch (action.type) {
    case favouritesActions.loadFavourites:
      return {
        ...state,
        favourites: action.payload as Character[],
      };
    case favouritesActions.addFoFavourite:
      return {
        ...state,
        favourites: [...state.favourites, action.payload as Character],
      };
    case favouritesActions.removeFavourite:
      return {
        ...state,
        favourites: state.favourites.filter(
          (character) => character.id !== (action.payload as Character)?.id
        ),
      };
    default:
      return state;
  }
};
