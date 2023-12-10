import { SyntheticEvent, useContext, useState } from 'react';
import { FavouritesContext } from '../../context/context';
import { Character } from '../../models/character.types';

import style from './comments.module.scss';
import genericStyle from '../../index.module.scss';

export const Comments = ({ character }: any) => {
  const [commentValue, setCommentValue] = useState<string>('');
  const { stateFavourites } = useContext(FavouritesContext);
  const { addComment } = useContext(FavouritesContext);

  const handleComment = (
    character: Character | undefined,
    event: SyntheticEvent
  ) => {
    event.preventDefault();
    const element = event.target as HTMLFormElement;
    const comment = element.elements.namedItem('comment') as HTMLInputElement;
    addComment(character, comment.value);
    setCommentValue('');
  };

  return (
    <div>
      <p>Añade comentarios: </p>
      <form
        onSubmit={(event) => handleComment(character, event)}
        className={style.form}
      >
        <input
          type="text"
          placeholder="Añade un comentario"
          name="comment"
          value={commentValue}
          onChange={(event) => setCommentValue(event.target.value)}
          className={style.input}
        />
        <button className={genericStyle.button}>Enviar</button>
      </form>
      <div>
        {stateFavourites?.favourites?.map((item) => {
          if (item.id === character.id) {
            return item?.comments?.map((comment, index) => {
              return (
                <div key={index} className={style.comment}>
                  {comment}
                </div>
              );
            });
          }
        })}
      </div>
    </div>
  );
};
