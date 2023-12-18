import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  CharactersContext,
  FavouritesContext,
  UiContext,
} from '../../context/context';
import { Transformation } from '../../components/transformation/transformation';
import { Comments } from '../../components/comments/comments';

import style from './details.module.scss';
import { Character } from '../../models/character.types';

export default function Details() {
  const { id } = useParams();
  const { stateCharacters, getCharacterById, changeTransformationPhoto } =
    useContext(CharactersContext);
  const { toggleFavourite, stateFavourites } = useContext(FavouritesContext);
  const { stateUi } = useContext(UiContext);
  const [currentCharacter, setCurrentCharacter] = useState<
    Character | undefined
  >();

  useEffect(() => {
    const handleCharacter = () => {
      getCharacterById(String(id));
    };
    handleCharacter();
  }, [currentCharacter]);

  const changesPhoto = (photo: string) => {
    const newCharacter = {
      ...stateCharacters?.character,
      image: photo,
    };

    changeTransformationPhoto(newCharacter as Character);
    setCurrentCharacter(newCharacter as Character);
  };

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
    <section
      className={`${style.details} ${!stateUi?.mode && style.details_dark}`}
    >
      <div className={style.image}>
        <img
          src={currentCharacter?.image || stateCharacters?.character?.image}
          alt={stateCharacters?.character?.name}
        />{' '}
      </div>
      <div className={style.info}>
        <div className={style.favourite}>
          <p>{stateCharacters?.character?.name}</p>
          <span
            onClick={() => handleFavourite(stateCharacters.character)}
            role="span"
          >
            {stateCharacters?.character?.id &&
            isFavourite(stateCharacters?.character?.id) ? (
              <img src="../kamehouse.png" alt="kamehouse" width="80px" />
            ) : (
              <img src="../tournament.png" alt="tournament" width="80px" />
            )}
          </span>
        </div>
        <p>
          Planeta de origen: {stateCharacters?.character?.originPlanet.name}
        </p>
        <p>{stateCharacters?.character?.description}</p>
        <Transformation
          stateCharacter={stateCharacters.character}
          setChangeTransformationImage={changesPhoto}
        />
        {isFavourite(stateCharacters?.character?.id ?? '') ? (
          <Comments {...(stateCharacters.character as Character)} />
        ) : (
          <div></div>
        )}
      </div>
    </section>
  );
}
