import { Repository } from './repository';
import { Character } from '../models/character.types';
import { apiUrl } from '../config';

export type ApiResponseData = {
  items: Character[];
  links: {
    next: string;
    previous: string;
  };
  meta: {
    totalPages: number;
  };
  character?: Character;
};

export const createCharactersRepository = (): Repository<ApiResponseData> => {
  return {
    getAll: async (currentPage) => {
      const urlFinal = `${apiUrl}?page=${currentPage}`;
      const data = await fetch(urlFinal);
      const response: ApiResponseData = await data.json();
      return response;
    },
    getItemById: async (id) => {
      const urlFinal = `${apiUrl}/${id}`;
      const data = await fetch(urlFinal);
      const response = await data.json();
      return {
        ...response,
        character: response,
      };
    },
    getCharactersByOptions: async (option, value) => {
      const optionBuild = `?${option}=${value}`;
      const urlFinal = `${apiUrl}${optionBuild}`;
      const data = await fetch(urlFinal);
      const response = await data.json();
      return {
        ...response,
        items: response,
      };
    },
  };
};
