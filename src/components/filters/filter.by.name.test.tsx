import '@testing-library/jest-dom';
import { FilterByName } from './filter.by.name';
import { MemoryRouter as Router } from 'react-router-dom';
import { fireEvent, render, screen } from '@testing-library/react';

describe('Given a Filter by name component', () => {
  const handleChange = jest.fn();

  beforeAll(() => {
    render(
      <Router>
        <FilterByName handleChange={handleChange} />
      </Router>
    );
  });

  test("test the component input with the 'Goku' value", async () => {
    const input = screen.getByRole('textbox');
    await fireEvent.change(input, { target: { value: 'Goku' } });

    expect(handleChange).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({ value: 'Goku' }),
      })
    );
  });
});
