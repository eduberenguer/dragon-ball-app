import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import App from './app';
import { MemoryRouter as Router } from 'react-router-dom';

jest.mock('../config', () => ({
  url: '',
}));

jest.mock('../pages/Home/Home', () => () => <div>Home page</div>);

describe('Given a App component', () => {
  test("When it's rendered", async () => {
    render(
      <Router initialEntries={['/']}>
        <App />
      </Router>
    );
    await waitFor(() => {
      expect(screen.getByText(/Home page/i)).toBeInTheDocument();
    });
  });
});
