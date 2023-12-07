import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App.tsx';
import { BrowserRouter as Router } from 'react-router-dom';
import { CharactersContextProvider } from './context/characters/characters.context.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CharactersContextProvider>
      <Router>
        <App />
      </Router>
    </CharactersContextProvider>
  </React.StrictMode>
);
