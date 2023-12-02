import { Repository } from './repository';
import { Character } from '../models/characterTypes';

const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;

type ApiResponse = {
  items: Character[];
};

export const CharactersRepository = (): Repository<Character> => {
  return {
    getAll: async () => {
      const response = await fetch(apiUrl);
      const { items }: ApiResponse = await response.json();
      return items;
    },
  };
};
