import { useContext, ChangeEvent, useState } from 'react';
import { FavouritesContext } from '../../context/context';
import { Card } from '../../components/card/card';

import style from './favourites.module.scss';
import { FilterByName } from '../../components/filters/filter.by.name';

export const Favourites = () => {
  const { stateFavourites } = useContext(FavouritesContext);

  const [value, setValue] = useState(stateFavourites.favourites);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setValue(
      stateFavourites.favourites.filter((character) => {
        if (
          character.name
            .toLowerCase()
            .includes(event.target.value.toLowerCase())
        ) {
          return character;
        }
      })
    );
  };

  return (
    <div className={style.container}>
      <h2>Favoritos</h2>
      <FilterByName handleChange={handleChange} />
      <div className={style.container_cards}>
        {value?.length ? (
          value?.map((character) => {
            return <Card {...character} key={character.id} />;
          })
        ) : (
          <p>No tienes personajes favoritos</p>
        )}
      </div>
    </div>
  );
};
