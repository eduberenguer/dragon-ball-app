import { useContext } from 'react';
import { CharactersContext } from '../../context/characters/characters.context';

import style from './pagination.module.scss';
import genericStyle from '../../index.module.scss';

export const Pagination = () => {
  const { pagination, changePage } = useContext(CharactersContext);
  const { currentPage, previousPage, nextPage, totalPages } = pagination;

  return (
    <div className={style.pagination}>
      <button
        onClick={() => changePage('previous')}
        className={`${
          !previousPage ? genericStyle.button_disabled : genericStyle.button
        }`}
      >
        ＜
      </button>
      <div>{`${currentPage} of ${totalPages}`}</div>
      <button
        onClick={() => changePage('next')}
        className={`${
          nextPage ? genericStyle.button : genericStyle.button_disabled
        }`}
      >
        ＞
      </button>
    </div>
  );
};
