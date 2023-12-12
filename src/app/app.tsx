import { Route, Routes } from 'react-router-dom';

import { Home } from '../pages/home/home';
import { Favourites } from '../pages/favourites/favourites';
import { Header } from '../components/header/header';
import { Details } from '../pages/details/details';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </>
  );
}

export default App;
