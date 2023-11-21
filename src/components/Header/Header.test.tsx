import { Header } from './Header';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('', () => {
  render(<Header />);
  test('', () => {
    const element = screen.getByRole('banner');

    expect(element).toBeInTheDocument();
  });
});
