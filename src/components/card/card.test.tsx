import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Card } from './card';
import { mockCharacter } from '../../mocks/character.mock';

jest.mock('../../config', () => ({
  url: '',
}));

describe('Given a Card component', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Card {...mockCharacter} />;
      </BrowserRouter>
    );
  });
  test("then it should show the word 'Goku'", () => {
    const name = 'Goku';

    const label = screen.getByText(name);

    expect(label).toBeInTheDocument();
  });
});
