import '@testing-library/jest-dom';
import { FilterByOptions } from './filter.by.options';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { CharactersContext } from '../../context/context';
import { mockCharactersContext } from '../../mocks/characters.context.mock';
import { mockPagination } from '../../mocks/pagination.mock';

jest.mock('../../config', () => ({
  url: '',
}));

describe('Given a Filter by option component', () => {
  beforeEach(() => {
    render(
      <Router>
        <CharactersContext.Provider value={mockCharactersContext}>
          <FilterByOptions pagination={mockPagination} />
        </CharactersContext.Provider>
      </Router>
    );
  });

  test('should render the component', () => {
    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(button).toBeInTheDocument();
  });

  test('should change select value', () => {
    const select = screen.getAllByRole('combobox');
    fireEvent.change(select[0], { target: { value: 'Human' } });

    expect((select[0] as HTMLSelectElement).value).toBe('Human');
  });
});
