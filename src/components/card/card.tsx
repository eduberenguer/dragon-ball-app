import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UiContext } from '../../context/context';
import { Character } from '../../models/character.types';

import style from './card.module.scss';

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
        alt={character.description}
        className={style.characterImage}
      />
    </Link>
  );
};
