import { SyntheticEvent, useContext, useState } from 'react';
import { CharactersContext, FavouritesContext } from '../../context/context';
import { Character } from '../../models/character.types';

export const Comments = ({ character }: { character: Character }) => {
  const [commentValue, setCommentValue] = useState<string>('');
  const { stateCharacters } = useContext(CharactersContext);
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
      {
        <div>
          {stateCharacters.characters.map((item) =>
            item?.comments?.map((item, index) => {
              return <p key={index}>{item}</p>;
            })
          )}
        </div>
      }
    </div>
  );
};
