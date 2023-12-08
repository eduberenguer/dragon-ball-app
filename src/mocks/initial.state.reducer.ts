import { characterState } from '../reducer/characters.reducer';

export const initialState: characterState = {
  characters: [],
  character: null,
  links: {
    next: '',
    previous: '',
  },
  meta: {
    totalPages: 1,
  },
};
