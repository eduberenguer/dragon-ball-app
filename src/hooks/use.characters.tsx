import { useReducer, useState } from 'react';
import {
  charactersReducer,
  characterState,
} from '../reducer/characters.reducer';
import * as ac from '../reducer/characters.action.creator';
import { Repository } from '../services/repository';
import { ApiResponse } from '../services/characters.repo';

export function useCharacters(repo: Repository<ApiResponse>) {
  const [pagination, setPagination] = useState({
    nextPage: '',
    previousPage: '',
    currentPage: 1,
  });

  const initialState: characterState = {
    characters: [],
  };

  const [stateCharacters, dispatch] = useReducer(
    charactersReducer,
    initialState
  );

  const getCharacters = async () => {
    const response = await repo.getAll(pagination.currentPage);
    setPagination({
      nextPage: response.links.next,
      previousPage: response.links.previous,
      currentPage: pagination.currentPage,
    });
    const { items } = response;
    dispatch(ac.loadCharacters(items));
  };

  const changePage = (direction: 'next' | 'previous') => {
    setPagination((prev) => ({
      ...prev,
      currentPage:
        direction === 'next' ? prev.currentPage + 1 : prev.currentPage - 1,
    }));
  };

  return {
    stateCharacters,
    getCharacters,
    pagination,
    changePage,
  };
}
