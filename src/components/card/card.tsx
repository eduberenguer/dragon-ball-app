import { Link } from 'react-router-dom';
import { Character } from '../../models/character.types';

import style from './Card.module.scss';

export const Card = (character: Character) => {
  return (
    <Link to={`/details/${character.id}`} className={style.card}>
      <p>{character.name}</p>
      <img
        src={character.image}
        alt={character.name}
        className={style.characterImage}
      />
    </Link>
  );
};
