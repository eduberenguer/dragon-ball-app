import { Repository } from './repository';
import { Character } from '../models/character.types';
import { apiUrl } from '../config';

type ApiResponse = {
  items: Character[];
};

export const createCharactersRepository = (): Repository<Character> => {
  return {
    getAll: async () => {
      const response = await fetch(apiUrl);
      const { items }: ApiResponse = await response.json();
      return items;
    },
  };
};
