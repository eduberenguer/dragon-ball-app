import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Card } from './card';
import { mockCharacter } from '../../mocks/character.mock';

describe('Card', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Card {...mockCharacter} />;
      </BrowserRouter>
    );
  });
  test("Then it should show the word 'Goku'", () => {
    const name = 'Goku';

    const label = screen.getByText(name);

    expect(label).toBeInTheDocument();
  });
});
