import { useReducer, useState } from 'react';
import {
  charactersReducer,
  characterState,
} from '../reducer/characters.reducer';
import * as ac from '../reducer/characters.action.creator';
import { Repository } from '../services/repository';
import { ApiResponseData } from '../services/characters.repo';

export function useCharacters(repo: Repository<ApiResponseData>) {
  const [pagination, setPagination] = useState({
    nextPage: '',
    previousPage: '',
    currentPage: 1,
    totalPages: 0,
  });

  const initialState: characterState = {
    characters: [],
    character: null,
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
      totalPages: response.meta.totalPages,
    });
    const items = 'items' in response ? response.items : [];
    dispatch(ac.loadCharacters(items));
  };

  const getCharacterById = async (id: string) => {
    const response = await repo.getItemById(id);
    if (response.character) {
      dispatch(ac.loadCharacterById(response.character));
    }
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
    getCharacterById,
  };
}
