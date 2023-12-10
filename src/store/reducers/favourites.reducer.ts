import { Character } from '../../models/character.types';
import { favouritesActions } from '../actions/favourites.actions';
import {
  FavouriteActions,
  CommentActions,
} from '../actions.creators/favourites.action.creator';

export type favouriteState = {
  favourites: Character[];
};

export const favouritesReducer = (
  state: favouriteState,
  action: FavouriteActions | CommentActions
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
    case favouritesActions.addComment:
      const addCommentAction = action as {
        payload: { id: string; comment: string };
      };
      console.log('addCommentAction', addCommentAction);
      return {
        ...state,
        favourites: state.favourites.map((character) => {
          if (String(character.id) === addCommentAction?.payload?.id) {
            console.log('entra');
            return {
              ...character,
              comments: [
                ...(character.comments || []),
                addCommentAction?.payload?.comment,
              ],
            };
          }
          return character;
        }),
      };
    default:
      return state;
  }
};
