import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CharactersContext, FavouritesContext } from '../../context/context';
import { Transformation } from '../../components/transformation/transformation';

import style from './details.module.scss';
import { Character } from '../../models/character.types';

export const Details = () => {
  const { id } = useParams();
  const { stateCharacters, getCharacterById } = useContext(CharactersContext);
  const { toggleFavourite, stateFavourites } = useContext(FavouritesContext);
  const [changeTransformationImage, setChangeTransformationImage] = useState<
    string | undefined
  >('');

  useEffect(() => {
    const handleCharacter = () => {
      getCharacterById(String(id));
    };
    setChangeTransformationImage(stateCharacters?.character?.image);
    handleCharacter();
  }, [id]);

  const handleFavourite = (character: Character | undefined) => {
    toggleFavourite(character);
  };

  const isFavourite = (id: string | undefined) => {
    const isFavourite = stateFavourites?.favourites?.find(
      (item) => item.id === id
    );
    if (isFavourite) {
      return (
        <span role="img" aria-label="heart">
          ❤️
        </span>
      );
    }
    return (
      <span role="img" aria-label="heart">
        🩶
      </span>
    );
  };

  return (
    <section className={style.container}>
      <div className={style.image}>
        <img
          src={
            changeTransformationImage
              ? changeTransformationImage
              : stateCharacters?.character?.image
          }
          alt={stateCharacters?.character?.name}
        />
      </div>
      <div className={style.info}>
        <p>{stateCharacters?.character?.name}</p>
        <p onClick={() => handleFavourite(stateCharacters.character)}>
          {isFavourite(stateCharacters?.character?.id)}
        </p>
        <p>
          Planeta de origen: {stateCharacters?.character?.originPlanet.name}
        </p>
        <p>{stateCharacters?.character?.description}</p>
        <Transformation
          stateCharacter={stateCharacters.character}
          setChangeTransformationImage={setChangeTransformationImage}
        />
      </div>
    </section>
  );
};
