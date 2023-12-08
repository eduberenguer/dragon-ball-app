import { Repository } from './repository';
import { Character } from '../models/character.types';
import { apiUrl } from '../config';

export type ApiResponse = {
  items: Character[];
  links: {
    next: string;
    previous: string;
  };
  meta: {
    totalPages: number;
  };
};

export const createCharactersRepository = (): Repository<ApiResponse> => {
  return {
    getAll: async (currentPage) => {
      const urlFinal = `${apiUrl}?page=${currentPage}`;
      const data = await fetch(urlFinal);
      const response: ApiResponse = await data.json();
      return response;
    },
  };
};
