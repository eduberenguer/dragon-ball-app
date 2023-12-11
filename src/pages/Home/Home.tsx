import { useContext, useEffect } from 'react';
import { CharactersContext, UiContext } from '../../context/context';
import { Character } from '../../models/character.types';
import { Card } from '../../components/card/card';
import { Pagination } from '../../components/pagination/pagination';

import style from './home.module.scss';
import { Filter } from '../../components/filter/filter';

export const Home = () => {
  const { stateCharacters, getCharacters, pagination, changePage } =
    useContext(CharactersContext);

  const { stateUi } = useContext(UiContext);

  useEffect(() => {
    getCharacters();
  }, [pagination?.currentPage]);

  const handleChangePage = (direction: 'next' | 'previous') => {
    changePage(direction);
  };

  return (
    <>
      <Filter pagination={pagination} />
      <div className={stateUi?.mode ? style.container : style.mode_dark}>
        {stateCharacters.characters.length ? (
          stateCharacters.characters.map((character: Character) => (
            <Card {...character} key={character.id} />
          ))
        ) : (
          <p>No se encontraron personajes</p>
        )}
      </div>
      <Pagination pagination={pagination} handleChangePage={handleChangePage} />
    </>
  );
};
