import '@testing-library/jest-dom';
import { Comments } from './comments';
import { MemoryRouter as Router } from 'react-router-dom';
import { mockCharacter } from '../../mocks/character.mock';
import { render, screen } from '@testing-library/react';

describe('render comments component', () => {
  test('', () => {
    render(
      <Router>
        <Comments {...mockCharacter}></Comments>
      </Router>
    );

    const linkText = 'Añade comentarios:';
    const link = screen.getByText(linkText);

    expect(link).toBeInTheDocument();
  });
});
