import { useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CharactersContext } from '../../context/characters/characters.context';

export const Details = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { stateCharacters, getCharacters } = useContext(CharactersContext);

  useEffect(() => {
    const handleRedirect = () => {
      if (stateCharacters.characters.length === 0) {
        getCharacters();
      }
    };

    handleRedirect();
  }, [stateCharacters.characters.length, navigate]);

  const characterCurrent = stateCharacters.characters.find((item) => {
    return item.id == id;
  });

  return <>{characterCurrent && characterCurrent.name}</>;
};
