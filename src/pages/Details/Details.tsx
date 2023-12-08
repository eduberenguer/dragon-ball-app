import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CharactersContext } from '../../context/characters/characters.context';
import { Transformation } from '../../components/transformation/transformation';

import style from './details.module.scss';

export const Details = () => {
  const { id } = useParams();
  const { stateCharacters, getCharacterById } = useContext(CharactersContext);
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
        <p>{stateCharacters?.character?.ki}</p>
        <p>{stateCharacters?.character?.description}</p>
        <Transformation
          stateCharacter={stateCharacters.character}
          setChangeTransformationImage={setChangeTransformationImage}
        />
      </div>
    </section>
  );
};
