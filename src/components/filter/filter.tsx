import { useContext, useState } from 'react';
import { optionsRace } from './options.filters/race.options';
import { optionsAffiliation } from './options.filters/affiliation.options';
import { CharactersContext } from '../../context/context';
import { PaginationType } from '../../models/pagination.type';

import style from './filter.module.scss';
import genericSyles from '../../index.module.scss';

export const Filter = ({ pagination }: { pagination: PaginationType }) => {
  const [selected, setSelected] = useState({
    race: 'default',
    affiliation: 'default',
  });
  const { getCharactersByOptions, getCharacters } =
    useContext(CharactersContext);

  const handleOption = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setSelected({
      ...selected,
      [name]: value,
    });
    getCharactersByOptions({
      ...selected,
      [name]: value,
    });
  };

  const clearFilters = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    setSelected({
      race: 'default',
      affiliation: 'default',
    });
    getCharacters();
  };

  return (
    <>
      {pagination.currentPage === 1 && (
        <div className={style.select}>
          <form>
            <span>Filtrar por raza: </span>
            <select value={selected.race} onChange={handleOption} name="race">
              <option value="default"> Todos </option>
              {optionsRace.map((race, index) => {
                return (
                  <option value={race} key={index}>
                    {race}
                  </option>
                );
              })}
            </select>
            <span>Filtrar por afiliación: </span>
            <select
              value={selected.affiliation}
              onChange={handleOption}
              name="affiliation"
            >
              <option value="default"> Todos </option>
              {optionsAffiliation.map((affiliation, index) => {
                return (
                  <option value={affiliation} key={index}>
                    {affiliation}
                  </option>
                );
              })}
            </select>
            <button className={genericSyles.button} onClick={clearFilters}>
              Borrar filtros
            </button>
          </form>
        </div>
      )}
    </>
  );
};
