import { useContext, useEffect, useState } from 'react';
import { CharactersContext } from '../../context/characters/characters.context';
import { Character } from '../../models/character.types';
import { Card } from '../../components/card/card';
import { Pagination } from '../../components/pagination/pagination';
import { Race } from '../../models/character.types';
import { optionsRace } from '../../mocks/race.options';

import style from './home.module.scss';

export const Home = () => {
  const {
    stateCharacters,
    getCharacters,
    pagination,
    getCharactersByOptions,
    changePage,
  } = useContext(CharactersContext);
  const [selected] = useState();

  useEffect(() => {
    getCharacters();
  }, [pagination.currentPage]);

  const handleOption = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value as Race;
    console.log(value);
    getCharactersByOptions('race', value);
  };

  const handleChangePage = (direction: 'next' | 'previous') => {
    changePage(direction);
  };

  return (
    <>
      {pagination.currentPage === 1 && (
        <div className={style.select}>
          <form>
            <select defaultValue={selected} onChange={handleOption}>
              <option value="default"> - </option>
              {optionsRace.map((race, index) => {
                return (
                  <option value={race} key={index}>
                    {race}
                  </option>
                );
              })}
            </select>
          </form>
        </div>
      )}
      <div className={style.container}>
        {stateCharacters.characters.length ? (
          stateCharacters.characters.map((character: Character) => (
            <Card {...character} key={character.id} />
          ))
        ) : (
          <p>No characters found</p>
        )}
      </div>
      <Pagination pagination={pagination} handleChangePage={handleChangePage} />
    </>
  );
};
