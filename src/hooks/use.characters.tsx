import { useReducer, useState } from 'react';
import { charactersReducer } from '../store/reducers/characters.reducer';
import * as ac from '../store/actions.creators/characters.action.creator';
import { Repository } from '../services/repository';
import { ApiResponseData } from '../services/characters.repo';
import { initialStateCharacters } from '../mocks/initial.state.reducer';
import { Character } from '../models/character.types';

export function useCharacters(repo: Repository<ApiResponseData>) {
  const [pagination, setPagination] = useState({
    nextPage: '',
    previousPage: '',
    currentPage: 1,
    totalPages: 0,
  });

  const [stateCharacters, dispatch] = useReducer(
    charactersReducer,
    initialStateCharacters
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

  const getCharactersByOptions = async (filters: {
    race: string;
    affiliation: string;
  }) => {
    if (filters.affiliation === 'default' && filters.race === 'default') {
      getCharacters();
    } else {
      const response = await repo.getCharactersByOptions(filters);
      setPagination({
        nextPage: '',
        previousPage: '',
        currentPage: 1,
        totalPages: 1,
      });
      dispatch(ac.loadCharactersByOptions(response.items));
    }
  };

  const changeTransformationPhoto = (character: Character) => {
    ac.changeTransformationPhoto(character);
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
    getCharactersByOptions,
    changeTransformationPhoto,
  };
}
