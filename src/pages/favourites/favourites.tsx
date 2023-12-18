import { useContext, ChangeEvent, useState } from 'react';
import { FavouritesContext, UiContext } from '../../context/context';
import { Card } from '../../components/card/card';

import style from './favourites.module.scss';
import { FilterByName } from '../../components/filters/filter.by.name';

export default function Favourites() {
  const { stateFavourites } = useContext(FavouritesContext);
  const { stateUi } = useContext(UiContext);

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
    <div
      className={`${style.favourites} ${
        !stateUi?.mode && style.favourites_dark
      }`}
    >
      <h2>Favoritos</h2>
      <div>
        <FilterByName handleChange={handleChange} />
      </div>
      <div className={style.favourites_cards}>
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
}
