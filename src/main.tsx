import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './testApp/app.tsx';
import { BrowserRouter as Router } from 'react-router-dom';
import { ContextProvider } from './context/context.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ContextProvider>
      <Router>
        <App />
      </Router>
    </ContextProvider>
  </React.StrictMode>
);
