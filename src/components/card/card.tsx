import { Link } from 'react-router-dom';
import { Character } from '../../models/character.types';

import style from './Card.module.scss';
import { UiContext } from '../../context/context';
import { useContext } from 'react';

export const Card = (character: Character) => {
  const { stateUi } = useContext(UiContext);

  return (
    <Link
      to={`/details/${character.id}`}
      className={`${style.card} ${!stateUi?.mode && style.card_dark}`}
    >
      <p>{character.name}</p>
      <img
        src={character.image}
        alt={character.name}
        className={style.characterImage}
      />
    </Link>
  );
};
