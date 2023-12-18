import '@testing-library/jest-dom';
import { CharactersContext, ContextProvider } from './context';
import { MemoryRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import { useContext } from 'react';
import { screen } from '@testing-library/react';

jest.mock('../config', () => ({
  url: '',
}));

describe('Render ContextProvider with testComponent', () => {
  function TestComponent() {
    const { stateCharacters } = useContext(CharactersContext);

    const initialState = {
      characters: [],
      character: undefined,
      links: {
        next: '',
        previous: '',
      },
      meta: {
        totalPages: 1,
      },
    };

    if (JSON.stringify(stateCharacters) === JSON.stringify(initialState)) {
      return <p>Test ok</p>;
    }
    return <p>Test failed</p>;
  }

  test('verified render Testcomponent', () => {
    render(
      <Router>
        <ContextProvider>
          <TestComponent />
        </ContextProvider>
      </Router>
    );

    const element = screen.getByText(/Test ok/i);
    expect(element).toBeInTheDocument();
  });
});
