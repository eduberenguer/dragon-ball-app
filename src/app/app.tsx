import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header } from '../components/header/header';

const Home = lazy(() => import('../pages/home/home'));
const Favourites = lazy(() => import('../pages/favourites/favourites'));
const Details = lazy(() => import('../pages/details/details'));

export default function App() {
  return (
    <>
      <Suspense>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/favourites" element={<Favourites />}></Route>
          <Route path="/details/:id" element={<Details />}></Route>
        </Routes>
      </Suspense>
    </>
  );
}
