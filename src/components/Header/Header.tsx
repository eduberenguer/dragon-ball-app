import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UiContext } from '../../context/context';

import style from './Header.module.scss';
import genericStyle from '../../index.module.scss';

export const Header = () => {
  const { toggleTheme, stateUi } = useContext(UiContext);

  const toggleMode = () => {
    toggleTheme();
  };

  return (
    <>
      <header className={style.header}>
        <div>
          <Link to="/" className={style.link}>
            Dragon Ball
          </Link>
        </div>
        <div className={style.container_button}>
          <button className={genericStyle.button}>
            <Link to="/favourites">
              <img src="../hairBlond.png" alt="blond" />
            </Link>
          </button>
          <p onClick={toggleMode}>{stateUi?.mode ? '⚫️' : '⚪️'}</p>
        </div>
      </header>
    </>
  );
};
