import '@testing-library/jest-dom';
import { FilterByOptions } from './filter.by.options';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { CharactersContext } from '../../context/context';
import { mockCharactersContext } from '../../mocks/characters.context.mock';

jest.mock('../../config', () => ({
  url: '',
}));

describe('FilterByOptions', () => {
  const currentPage = 1;
  const nextPage = 2;
  const totalPages = 6;
  const previousPage = 0;

  beforeEach(() => {
    render(
      <Router>
        <CharactersContext.Provider value={mockCharactersContext}>
          <FilterByOptions
            pagination={{
              currentPage,
              nextPage,
              previousPage,
              totalPages,
            }}
          />
        </CharactersContext.Provider>
      </Router>
    );
  });

  test('should render the component', async () => {
    const button = screen.getByRole('button');
    await fireEvent.click(button);

    expect(button).toBeInTheDocument();
  });

  test('', async () => {
    const form = screen.getByRole('form');

    await fireEvent.submit(form);
  });
});
