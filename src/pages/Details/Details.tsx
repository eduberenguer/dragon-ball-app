import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CharactersContext, FavouritesContext } from '../../context/context';
import { Transformation } from '../../components/transformation/transformation';
import { Comments } from '../../components/comments/comments';

import style from './details.module.scss';
import { Character } from '../../models/character.types';

export const Details = () => {
  const { id } = useParams();
  const { stateCharacters, getCharacterById } = useContext(CharactersContext);
  const { toggleFavourite, stateFavourites } = useContext(FavouritesContext);
  const [changeTransformationImage, setChangeTransformationImage] = useState<
    string | undefined
  >('');

  console.log('changeTransformationImage', changeTransformationImage);

  useEffect(() => {
    const handleCharacter = () => {
      getCharacterById(String(id));
    };
    setChangeTransformationImage(stateCharacters?.character?.image);
    handleCharacter();
  }, []);

  const handleFavourite = (character: Character | undefined) => {
    toggleFavourite(character);
  };

  const isFavourite = (id: string) => {
    const isFavourite = stateFavourites?.favourites?.find(
      (item) => item.id === id
    );
    return isFavourite;
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
        />{' '}
      </div>

      <div className={style.info}>
        <div className={style.favourite}>
          <p>{stateCharacters?.character?.name}</p>
          <span onClick={() => handleFavourite(stateCharacters.character)}>
            {stateCharacters?.character?.id &&
            isFavourite(stateCharacters?.character?.id) ? (
              <img src="../hairBlond.png" alt="blond" width="80px" />
            ) : (
              <img src="../hairBlack.png" alt="black" width="80px" />
            )}
          </span>
        </div>
        <p>
          Planeta de origen: {stateCharacters?.character?.originPlanet.name}
        </p>
        <p>{stateCharacters?.character?.description}</p>
        <Transformation
          stateCharacter={stateCharacters.character}
          setChangeTransformationImage={setChangeTransformationImage}
        />
        {isFavourite(stateCharacters?.character?.id ?? '') && (
          <Comments character={stateCharacters.character} />
        )}
      </div>
    </section>
  );
};
