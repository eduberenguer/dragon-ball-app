import './App.css';
import { Route, Routes } from 'react-router-dom';

import { Home } from './pages/Home/Home';
import { Favourite } from './pages/Favourites/Favourites';
import { Header } from './components/Header/Header';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favourite" element={<Favourite />} />
      </Routes>
    </div>
  );
}

export default App;
