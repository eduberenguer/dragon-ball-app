import { UseCharacterStructured } from '../context/context';
import { initialStateCharacters } from './initial.state.reducer';

export const mockCharactersContext: UseCharacterStructured = {
  stateCharacters: initialStateCharacters,
  getCharacters: jest.fn(),
  getCharactersByOptions: jest.fn(),
  getCharacterById: jest.fn(),
} as unknown as UseCharacterStructured;
