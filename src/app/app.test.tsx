import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import App from './app';

jest.mock('../config', () => ({
  url: '',
}));

jest.mock('../pages/Home/Home');

describe('Given a App component', () => {
  test("When it's rendered", () => {
    render(
      <Router>
        <App />
      </Router>
    );

    const nameText = screen.getByText(/Dragon Ball/i);
    expect(nameText).toBeInTheDocument();
  });
});
