import style from './pagination.module.scss';
import genericStyle from '../../index.module.scss';
import { PaginationType } from '../../models/pagination.type';
import { UiContext } from '../../context/context';
import { useContext } from 'react';

export const Pagination = ({
  pagination,
  handleChangePage,
}: {
  pagination: PaginationType;
  handleChangePage: (direction: 'next' | 'previous') => void;
}) => {
  const { currentPage, previousPage, nextPage, totalPages } = pagination;
  const { stateUi } = useContext(UiContext);

  return (
    <div
      className={`${style.pagination} ${
        !stateUi?.mode && style.pagination_dark
      }`}
    >
      <button
        onClick={() => handleChangePage('previous')}
        className={`${
          !previousPage ? genericStyle.button_disabled : genericStyle.button
        }`}
      >
        ＜
      </button>
      {currentPage !== undefined && totalPages !== undefined
        ? `${currentPage} of ${totalPages}`
        : null}
      <button
        onClick={() => handleChangePage('next')}
        className={`${
          nextPage ? genericStyle.button : genericStyle.button_disabled
        }`}
      >
        ＞
      </button>
    </div>
  );
};
