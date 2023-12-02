import { Character } from '../../models/characterTypes';

export interface Props {
  children: JSX.Element | JSX.Element[];
}

export interface CharactersContextType {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  characters: Character[];
  setCharacters: (characters: Character[]) => void;
}
