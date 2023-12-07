import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './header';
import { render, screen } from '@testing-library/react';

describe('Header component', () => {
  test("Then it should show a Link with text 'Dragon ball'", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    const linkText = 'Dragon Ball';
    const link = screen.getByText(linkText).closest('a');

    expect(link).toHaveAttribute('href', '/');
  });

  test("Then it should show a Link with text 'Favourites'", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    const linkText = 'Favourites';
    const link = screen.getByText(linkText).closest('a');

    expect(link).toHaveAttribute('href', '/favourites');
  });
});
