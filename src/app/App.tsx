import { Route, Routes } from 'react-router-dom';

import { Home } from '../pages/Home/Home';
import { Favourite } from '../pages/Favourites/Favourites';
import { Header } from '../components/Header/Header';
import { Details } from '../pages/Details/Details';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favourite" element={<Favourite />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </>
  );
}

export default App;
