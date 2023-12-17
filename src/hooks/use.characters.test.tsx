import '@testing-library/jest-dom';
import { useCharacters } from './use.characters';
import { CharactersContext } from '../context/context';
import { mockCharactersContext } from '../mocks/characters.context.mock';
import { renderHook, act } from '@testing-library/react';
import { mockCharacter, mockCharacters } from '../mocks/character.mock';

jest.mock('../config', () => ({
  url: '',
}));

interface WrapperProps {
  children: JSX.Element;
}

describe('Render useCharacters custom hook', () => {
  test('should render component', async () => {
    const Wrapper = ({ children }: WrapperProps) => (
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

  test('should render component', async () => {
    const Wrapper = ({ children }: WrapperProps) => (
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

  test('should render component', async () => {
    const Wrapper = ({ children }: WrapperProps) => (
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
  test('should render component', async () => {
    const Wrapper = ({ children }: WrapperProps) => (
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
  test('should render component', async () => {
    const Wrapper = ({ children }: WrapperProps) => (
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

  test('should render component', async () => {
    const Wrapper = ({ children }: WrapperProps) => (
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
