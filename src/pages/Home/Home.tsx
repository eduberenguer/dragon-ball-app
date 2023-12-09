import { useContext, useEffect } from 'react';
import { CharactersContext, UiContext } from '../../context/context';
import { Character } from '../../models/character.types';
import { Card } from '../../components/card/card';
import { Pagination } from '../../components/pagination/pagination';
import { Race } from '../../models/character.types';

import style from './home.module.scss';
import { Filter } from '../../components/filter/filter';

export const Home = () => {
  const {
    stateCharacters,
    getCharacters,
    pagination,
    getCharactersByOptions,
    changePage,
  } = useContext(CharactersContext);

  const { stateUi } = useContext(UiContext);

  useEffect(() => {
    getCharacters();
  }, [pagination?.currentPage]);

  const handleOption = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value as Race;
    getCharactersByOptions('race', value);
  };

  const handleChangePage = (direction: 'next' | 'previous') => {
    changePage(direction);
  };

  return (
    <>
      <Filter pagination={pagination} handleOption={handleOption} />
      <div className={stateUi?.mode ? style.container : style.mode_dark}>
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
