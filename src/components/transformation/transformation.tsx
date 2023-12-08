import { Character } from '../../models/character.types';
import { Transformations } from '../../models/tranformations.types';

import style from './transformation.module.scss';
import genericStyle from '../../index.module.scss';

export const Transformation = ({
  stateCharacter,
  setChangeTransformationImage,
}: {
  stateCharacter: Character | null;
  setChangeTransformationImage: (image: string) => void;
}) => {
  const changeImageTransformation = (image: string) => {
    setChangeTransformationImage(image);
  };

  return (
    <div className={style.container}>
      {stateCharacter?.transformations?.map(
        (tranformation: Transformations) => {
          return (
            <button
              onClick={() => changeImageTransformation(tranformation.image)}
              className={genericStyle.button}
              key={tranformation.id}
            >
              {tranformation.name}–
            </button>
          );
        }
      )}
    </div>
  );
};
