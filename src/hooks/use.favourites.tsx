import { useReducer } from 'react';
import { favouritesReducer } from '../store/reducers/favourites.reducer';
import { initialStateFavourites } from '../mocks/initial.state.reducer';
import * as ac from '../store/actions.creators/favourites.action.creator';
import { Character } from '../models/character.types';

export const useFavourites = () => {
  const [stateFavourites, dispatch] = useReducer(
    favouritesReducer,
    initialStateFavourites
  );

  const loadFavourites = () => {
    dispatch(ac.loadFavourites(stateFavourites as unknown as Character[]));
  };

  const toggleFavourite = (character: Character | undefined) => {
    const isFavourite = stateFavourites.favourites.find(
      (item) => item.id === character?.id
    );
    if (isFavourite) {
      dispatch(ac.removeFavourite(character));
      return;
    }
    dispatch(ac.addFavourite(character));
  };

  return {
    stateFavourites,
    loadFavourites,
    toggleFavourite,
  };
};
