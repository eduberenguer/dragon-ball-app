import { Route, Routes } from 'react-router-dom';

import { Home } from '../pages/home/home';
import { Favourite } from '../pages/favourites/favourites';
import { Header } from '../components/header/header';
import { Details } from '../pages/details/details';

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
