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
    getCharactersByOptions: async (filters) => {
      const { race, affiliation } = filters;

      const hasDefaultRace = race === 'default';
      const hasDefaultAffiliation = affiliation === 'default';

      let urlFinal;

      if (hasDefaultRace || hasDefaultAffiliation) {
        const optionBuild = hasDefaultRace
          ? `?affiliation=${affiliation}`
          : `?race=${race}`;

        urlFinal = `${apiUrl}${optionBuild}`;
      } else {
        urlFinal = `${apiUrl}?race=${race}&affiliation=${affiliation}`;
      }

      const data = await fetch(urlFinal);
      const response = await data.json();

      return {
        ...response,
        items: response,
      };
    },
  };
};
