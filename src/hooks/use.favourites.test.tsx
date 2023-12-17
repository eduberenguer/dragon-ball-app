import '@testing-library/jest-dom';
import { useFavourites } from './use.favourites';
import { FavouritesContext } from '../context/context';
import { renderHook, act } from '@testing-library/react';
import { mockFavouritesContext } from '../mocks/favourites.context.mock';
import { mockCharacter } from '../mocks/character.mock';

jest.mock('../config', () => ({
  url: '',
}));

interface WrapperProps {
  children: JSX.Element;
}

describe('Render useFavourites custom hook and testcomponent', () => {
  test('should render component', async () => {
    const Wrapper = ({ children }: WrapperProps) => (
      <FavouritesContext.Provider value={mockFavouritesContext}>
        {children}
      </FavouritesContext.Provider>
    );

    const { result } = renderHook(useFavourites, { wrapper: Wrapper });
    await act(async () => result.current.loadFavourites());

    expect(result.current.stateFavourites.favourites[0]).toBe(undefined);
  });

  test('should render component', async () => {
    const Wrapper = ({ children }: WrapperProps) => (
      <FavouritesContext.Provider value={mockFavouritesContext}>
        {children}
      </FavouritesContext.Provider>
    );

    const { result } = renderHook(useFavourites, { wrapper: Wrapper });
    await act(async () => result.current.toggleFavourite(mockCharacter));

    expect(result.current.stateFavourites.favourites[0].name).toBe('Goku');

    await act(async () => result.current.toggleFavourite(mockCharacter));

    expect(result.current.stateFavourites.favourites[0]).toBe(undefined);
  });

  test('should render component', async () => {
    const Wrapper = ({ children }: WrapperProps) => (
      <FavouritesContext.Provider value={mockFavouritesContext}>
        {children}
      </FavouritesContext.Provider>
    );

    const { result } = renderHook(useFavourites, { wrapper: Wrapper });
    result.current.stateFavourites.favourites[0] = mockCharacter;
    await act(async () =>
      result.current.addComment(mockCharacter, 'this is a test comment')
    );

    expect(result.current.stateFavourites.favourites[0].comments[2]).toBe(
      'this is a test comment'
    );
  });
});
