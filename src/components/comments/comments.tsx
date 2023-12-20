import { SyntheticEvent, useContext, useState } from 'react';
import { FavouritesContext } from '../../context/context';
import { Character } from '../../models/character.types';
import { UiContext } from '../../context/context';

import style from './comments.module.scss';
import genericStyle from '../../index.module.scss';

export const Comments = (character: Character | undefined) => {
  const [commentValue, setCommentValue] = useState<string>('');
  const { stateFavourites } = useContext(FavouritesContext);
  const { addComment } = useContext(FavouritesContext);
  const { stateUi } = useContext(UiContext);

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
    <div
      className={`${style.comments} ${!stateUi.mode && style.comments_dark}`}
    >
      <p>Añade comentarios: </p>
      <form
        aria-label="form"
        onSubmit={(event) => handleComment(character, event)}
        className={style.form}
      >
        <input
          aria-label="input"
          type="text"
          placeholder="Añade un comentario"
          name="comment"
          value={commentValue}
          onChange={(event) => setCommentValue(event.target.value)}
          className={genericStyle.input}
        />
        <button className={genericStyle.button}>Enviar</button>
      </form>
      <div>
        {stateFavourites?.favourites?.map((item) => {
          if (item.id === character?.id) {
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
