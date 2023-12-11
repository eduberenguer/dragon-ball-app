import { useContext } from 'react';
import { FavouritesContext } from '../context/context';
import { Card } from '../components/card/card';

import style from './favourites.module.scss';

export const Favourite = () => {
  const { stateFavourites } = useContext(FavouritesContext);

  return (
    <div className={style.container}>
      <h2>Favoritos</h2>
      <div className={style.container_cards}>
        {stateFavourites.favourites.length ? (
          stateFavourites?.favourites?.map((character) => {
            return <Card {...character} key={character.id} />;
          })
        ) : (
          <p>No tienes personajes favoritos</p>
        )}
      </div>
    </div>
  );
};
