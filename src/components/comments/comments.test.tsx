import '@testing-library/jest-dom';
import { Comments } from './comments';
import { mockCharacter } from '../../mocks/character.mock';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { FavouritesContext } from '../../context/context';
import userEvent from '@testing-library/user-event'; // Import the userEvent library
import { initialStateFavourites } from '../../mocks/initial.state.reducer';

jest.mock('../../config', () => ({
  url: '',
}));

describe('render comments component', () => {
  beforeEach(() => {
    render(
      <Router>
        <FavouritesContext.Provider
          value={{
            stateFavourites: initialStateFavourites,
            loadFavourites: () => {},
            toggleFavourite: () => {},
            addComment: () => {},
          }}
        >
          <Comments {...mockCharacter}></Comments>
        </FavouritesContext.Provider>
      </Router>
    );
  });

  test('renders comments', () => {
    initialStateFavourites.favourites.push(mockCharacter);
    const form = screen.getByRole('form');

    expect(form).toBeInTheDocument();
  });

  test('renders comments', async () => {
    const button = screen.getByRole('button');
    const form = screen.getByRole('form');

    await userEvent.click(button);
    await fireEvent.submit(form);
  });

  test('Add comment', async () => {
    const commentInput = screen.getByRole('textbox');
    const commentValue = 'Test comment';

    await fireEvent.change(commentInput, { target: { value: commentValue } });
    expect(commentInput).toBeInTheDocument();
  });
});
