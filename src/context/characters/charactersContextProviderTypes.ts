import { Character } from '../../types/characterTypes';

export interface CharactersContextType {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  characters: Character[]; // Define Character type as needed
  setCharacters: (characters: Character[]) => void;
}
