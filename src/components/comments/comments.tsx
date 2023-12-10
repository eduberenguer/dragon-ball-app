import { SyntheticEvent, useContext, useState } from 'react';
import { FavouritesContext } from '../../context/context';
import { Character } from '../../models/character.types';

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
      <form onSubmit={(event) => handleComment(character, event)}>
        <p>Añade comentarios: </p>
        <input
          type="text"
          placeholder="Añade un comentario"
          name="comment"
          value={commentValue}
          onChange={(event) => setCommentValue(event.target.value)}
        />
        <button>Enviar</button>
      </form>
      <div>
        {stateFavourites?.favourites?.map((item) => {
          if (item.id === character.id) {
            return item?.comments?.map((comment) => {
              return <div>{comment}</div>;
            });
          }
        })}
      </div>
    </div>
  );
};
