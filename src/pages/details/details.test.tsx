import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Details from './details';
import { CharactersContext, FavouritesContext } from '../../context/context';
import { mockCharacter } from '../../mocks/character.mock';
import { initialStateCharacters } from '../../mocks/initial.state.reducer';
import userEvent from '@testing-library/user-event';
import { mockCharactersContext } from '../../mocks/characters.context.mock';
import { mockFavouritesContext } from '../../mocks/favourites.context.mock';

initialStateCharacters.character = mockCharacter;

jest.mock('../../config', () => ({
  url: '',
}));

beforeEach(() => {
  initialStateCharacters.character = mockCharacter;
  render(
    <CharactersContext.Provider value={mockCharactersContext}>
      <FavouritesContext.Provider value={mockFavouritesContext}>
        <Details />
      </FavouritesContext.Provider>
    </CharactersContext.Provider>
  );
});

describe('Given a details component', () => {
  test('should render the component', () => {
    const element = screen.getByText('Goku');
    expect(element).toBeInTheDocument();
  });

  test('verified to have been called toggle favourite function', async () => {
    const span = screen.getByRole('span');
    await userEvent.click(span);

    expect(mockFavouritesContext.toggleFavourite).toHaveBeenCalled();
  });
});
