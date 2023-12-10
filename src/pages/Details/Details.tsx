import { useContext, useEffect, useState, SyntheticEvent } from 'react';
import { useParams } from 'react-router-dom';
import { CharactersContext, FavouritesContext } from '../../context/context';
import { Transformation } from '../../components/transformation/transformation';

import style from './details.module.scss';
import { Character } from '../../models/character.types';

export const Details = () => {
  const { id } = useParams();
  const { stateCharacters, getCharacterById } = useContext(CharactersContext);
  const { toggleFavourite, stateFavourites, addComment } =
    useContext(FavouritesContext);
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

  const isFavourite = (id: string) => {
    const isFavourite = stateFavourites?.favourites?.find(
      (item) => item.id === id
    );
    return isFavourite;
  };

  const handleComment = (
    character: Character | undefined,
    event: SyntheticEvent
  ) => {
    event.preventDefault();
    const element = event.target as HTMLFormElement;
    const comment = element.elements.namedItem('comment') as HTMLInputElement;
    addComment(character, comment.value);
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
        {stateCharacters?.character?.id &&
          isFavourite(stateCharacters?.character?.id) && (
            <form
              onSubmit={(event) =>
                handleComment(stateCharacters?.character, event)
              }
            >
              <p>Añade comentarios: </p>
              <input
                type="text"
                placeholder="Añade un comentario"
                name="comment"
              />
              <button>Enviar</button>
            </form>
          )}
        {
          <div>
            {stateFavourites?.favourites?.map((item) =>
              item?.comments?.map((item, index) => {
                return <p key={index}>{item}</p>;
              })
            )}
          </div>
        }
      </div>
    </section>
  );
};
