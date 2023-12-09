import { useState } from 'react';
import { optionsRace } from '../../mocks/race.options';

import style from './filter.module.scss';
import { PaginationType } from '../../models/pagination.type';

export const Filter = ({
  pagination,
  handleOption,
}: {
  pagination: PaginationType;
  handleOption: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}) => {
  const [selected] = useState();

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
    </>
  );
};
