import { useContext, useEffect, useState } from 'react';
import { CharactersContext, UiContext } from '../../context/context';
import { Character } from '../../models/character.types';
import { Card } from '../../components/card/card';
import { Pagination } from '../../components/pagination/pagination';

import style from './home.module.scss';
import { FilterByOptions } from '../../components/filters/filter.by.options';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const { stateCharacters, getCharacters, pagination, changePage } =
    useContext(CharactersContext);
  const { stateUi } = useContext(UiContext);

  useEffect(() => {
    getCharacters();
    setIsLoading(false);
  }, [pagination?.currentPage]);

  const handleChangePage = (direction: 'next' | 'previous') => {
    changePage(direction);
  };

  return (
    <>
      {isLoading ? (
        <div
          aria-label="The page is loading information"
          className={style.loading}
        >
          Loading...
        </div>
      ) : (
        <div>
          <FilterByOptions pagination={pagination} />
          <div className={stateUi?.mode ? style.home : style.home_dark}>
            {stateCharacters.characters.length ? (
              stateCharacters.characters.map((character: Character) => (
                <Card {...character} key={character.id} />
              ))
            ) : (
              <p>No se encontraron personajes</p>
            )}
          </div>
          <Pagination
            pagination={pagination}
            handleChangePage={handleChangePage}
          />
        </div>
      )}
    </>
  );
}
