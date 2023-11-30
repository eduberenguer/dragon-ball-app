import { Link } from 'react-router-dom';

import style from './Header.module.scss';
import genericStyle from '../../index.module.scss';

import LOGO from '../../assets/images/logo.png';

export const Header = () => {
  return (
    <header className={style.header}>
      <div>
        <Link to="/" className={style.link}>
          <img src={LOGO} alt="logo" width="20%" />
        </Link>
      </div>
      <div>
        <button className={genericStyle.button}>
          <Link to="/favourite">Favourites</Link>
        </button>
        <p>⚫️</p>
      </div>
    </header>
  );
};
