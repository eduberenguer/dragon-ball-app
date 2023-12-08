import { Link } from 'react-router-dom';

import style from './Header.module.scss';
import genericStyle from '../../index.module.scss';

export const Header = () => {
  return (
    <>
      <header className={style.header}>
        <div>
          <Link to="/" className={style.link}>
            Dragon Ball
          </Link>
        </div>
        <div>
          <button className={genericStyle.button}>
            <Link to="/favourites">Favoritos</Link>
          </button>
          <p>⚫️</p>
        </div>
      </header>
    </>
  );
};
