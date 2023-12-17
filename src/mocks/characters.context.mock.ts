import { UseCharacterStructured } from '../context/context';
import { initialStateCharacters } from './initial.state.reducer';
import { mockCharacter } from './character.mock';

initialStateCharacters.characters = [mockCharacter];

const currentPage = 1;
const nextPage = 2;
const totalPages = 6;
const previousPage = 0;

const mockRepo = {
  getAll: jest.fn(),
  getItemById: jest.fn(),
  getCharactersByOptions: jest.fn(),
};

export const mockCharactersContext: UseCharacterStructured = {
  stateCharacters: initialStateCharacters,
  getCharacters: jest.fn(),
  getCharactersByOptions: jest.fn(),
  getCharacterById: jest.fn(),
  pagination: {
    currentPage,
    nextPage,
    previousPage,
    totalPages,
  },
  changeTransformationPhoto: jest.fn(),
  repo: mockRepo,
} as unknown as UseCharacterStructured;
