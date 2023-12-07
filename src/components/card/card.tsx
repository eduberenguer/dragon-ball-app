import { Link } from 'react-router-dom';
import { Character } from '../../models/character.types';
import { transformSizeImage } from '../../utils/transform.size.image';

import style from './Card.module.scss';

export const Card = (character: Character) => {
  return (
    <div className={style.card}>
      <Link to={`/details/${character.id}`} className={style.link}>
        <p key={character.id}>{character.name}</p>
        <img src={transformSizeImage(character.image)} alt={character.name} />
      </Link>
    </div>
  );
};