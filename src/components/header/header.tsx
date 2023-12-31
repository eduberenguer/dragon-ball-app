import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { UiContext } from '../../context/context';
import { CharactersContext } from '../../context/context';
import { IoInvertMode, IoInvertModeOutline } from 'react-icons/io5';

import style from './header.module.scss';
import genericStyle from '../../index.module.scss';

export const Header = () => {
  const location = useLocation();
  const { toggleTheme, stateUi } = useContext(UiContext);
  const { getCharacters } = useContext(CharactersContext);

  const toggleMode = () => {
    toggleTheme();
  };

  return (
    <>
      <header
        className={`${style.header} ${!stateUi?.mode && style.header_dark}`}
        data-testid="header"
      >
        <div>
          <Link to="/" className={style.link} onClick={() => getCharacters()}>
            <img src="./logoApp.png" alt="logo" className={style.logo} />
          </Link>
        </div>
        <div className={style.container_button}>
          {location.pathname !== '/favourites' ? (
            <Link to="/favourites">
              <button className={genericStyle.button}>
                <img src="../kamehouse.png" alt="kamehouse" />
              </button>
            </Link>
          ) : (
            <Link to="/">
              <button className={genericStyle.button}>
                <img src="../tournament.png" alt="tournament" />
              </button>
            </Link>
          )}
          <p onClick={toggleMode}>
            {stateUi?.mode ? (
              <IoInvertMode className={style.icon} />
            ) : (
              <IoInvertModeOutline className={style.icon} />
            )}
          </p>
        </div>
      </header>
    </>
  );
};
