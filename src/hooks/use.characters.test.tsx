import '@testing-library/jest-dom';
import { useCharacters } from './use.characters';
import { CharactersContext } from '../context/context';
import { mockCharactersContext } from '../mocks/characters.context.mock';
import { renderHook, act } from '@testing-library/react';
import { mockCharacter, mockCharacters } from '../mocks/character.mock';
import { Props } from '../context/provider.types';

jest.mock('../config', () => ({
  url: '',
}));

describe('Render useCharacters custom hook', () => {
  test('should render component', async () => {
    const Wrapper = ({ children }: Props) => (
      <CharactersContext.Provider value={mockCharactersContext}>
        {children}
      </CharactersContext.Provider>
    );

    mockCharactersContext.repo.getAll = jest.fn().mockResolvedValue({
      items: [],
      links: {
        next: '',
        previous: '',
      },
      meta: {
        totalPages: 1,
      },
    });

    const { result } = renderHook(
      () => useCharacters(mockCharactersContext.repo),
      { wrapper: Wrapper }
    );
    await act(async () => result.current.getCharacters());
    expect(mockCharactersContext.repo.getAll).toHaveBeenCalled();

    expect(result.current.stateCharacters.characters[0]).toBe(undefined);
  });

  test('give me the character by id', async () => {
    const Wrapper = ({ children }: Props) => (
      <CharactersContext.Provider value={mockCharactersContext}>
        {children}
      </CharactersContext.Provider>
    );

    mockCharactersContext.repo.getItemById = jest.fn().mockResolvedValue({
      character: mockCharacter,
    });

    const { result } = renderHook(
      () => useCharacters(mockCharactersContext.repo),
      { wrapper: Wrapper }
    );
    await act(async () => result.current.getCharacterById(mockCharacter.id));
    expect(mockCharactersContext.repo.getItemById).toHaveBeenCalled();

    expect(result.current.stateCharacters.character?.name).toBe('Goku');
  });

  test('give me the characters by options', async () => {
    const Wrapper = ({ children }: Props) => (
      <CharactersContext.Provider value={mockCharactersContext}>
        {children}
      </CharactersContext.Provider>
    );

    mockCharactersContext.repo.getCharactersByOptions = jest
      .fn()
      .mockResolvedValue({
        items: mockCharacters,
      });

    const { result } = renderHook(
      () => useCharacters(mockCharactersContext.repo),
      { wrapper: Wrapper }
    );

    await act(async () =>
      result.current.getCharactersByOptions({
        race: 'Human',
        affiliation: 'default',
      })
    );
    expect(
      mockCharactersContext.repo.getCharactersByOptions
    ).toHaveBeenCalled();

    expect(result.current.stateCharacters.characters.length).toBe(1);
  });

  test("give me all characters when options are 'default'", async () => {
    const Wrapper = ({ children }: Props) => (
      <CharactersContext.Provider value={mockCharactersContext}>
        {children}
      </CharactersContext.Provider>
    );

    mockCharactersContext.repo.getCharactersByOptions = jest
      .fn()
      .mockResolvedValue({
        items: mockCharacters,
      });

    const { result } = renderHook(
      () => useCharacters(mockCharactersContext.repo),
      { wrapper: Wrapper }
    );

    await act(async () =>
      result.current.getCharactersByOptions({
        race: 'default',
        affiliation: 'default',
      })
    );
    expect(mockCharactersContext.repo.getAll).toHaveBeenCalled();
  });

  test('give me the new photo transformation', async () => {
    const Wrapper = ({ children }: Props) => (
      <CharactersContext.Provider value={mockCharactersContext}>
        {children}
      </CharactersContext.Provider>
    );

    const { result } = renderHook(useCharacters, { wrapper: Wrapper });

    await act(async () =>
      result.current.changeTransformationPhoto(mockCharacter)
    );
    expect(result.current.stateCharacters.character?.image).toBe(undefined);
  });

  test('verified and change page', async () => {
    const Wrapper = ({ children }: Props) => (
      <CharactersContext.Provider value={mockCharactersContext}>
        {children}
      </CharactersContext.Provider>
    );

    const { result } = renderHook(useCharacters, { wrapper: Wrapper });

    await act(async () => result.current.changePage('next'));
    expect(result.current.pagination.currentPage).toBe(2);

    await act(async () => result.current.changePage('previous'));
    expect(result.current.pagination.currentPage).toBe(1);
  });
});
