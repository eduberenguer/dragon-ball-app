import { Route, Routes } from 'react-router-dom';

import { Home } from '../testPages/home';
import { Favourite } from '../testPages/favourites';
import { Header } from '../components/test/header';
import { Details } from '../testPages/details';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favourites" element={<Favourite />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </>
  );
}

export default App;
