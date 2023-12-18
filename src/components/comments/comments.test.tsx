import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Comments } from './comments';
import { mockCharacter } from '../../mocks/character.mock';
import { MemoryRouter as Router } from 'react-router-dom';
import { FavouritesContext } from '../../context/context';
import { initialStateFavourites } from '../../mocks/initial.state.reducer';
import { mockFavouritesContext } from '../../mocks/favourites.context.mock';

jest.mock('../../config', () => ({
  url: '',
}));

describe('render comments component', () => {
  beforeEach(() => {
    render(
      <Router>
        <FavouritesContext.Provider value={mockFavouritesContext}>
          <Comments {...mockCharacter}></Comments>
        </FavouritesContext.Provider>
      </Router>
    );
  });

  test('render form in comments component', () => {
    initialStateFavourites.favourites.push(mockCharacter);
    const form = screen.getByRole('form');

    expect(form).toBeInTheDocument();
  });

  test('verify that the form works', async () => {
    const button = screen.getByRole('button');
    const form = screen.getByRole('form');

    await userEvent.click(button);
    await fireEvent.submit(form);
  });

  test('verify that the form works by creating a new comment', async () => {
    const commentInput = screen.getByRole('textbox');
    const commentValue = 'Test comment';

    await fireEvent.change(commentInput, { target: { value: commentValue } });
    expect(commentInput).toBeInTheDocument();
  });
});
