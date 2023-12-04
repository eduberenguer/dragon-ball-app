import { useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CharactersContext } from '../../context/characters/CharactersContext';

export const Detail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { stateCharacters } = useContext(CharactersContext);

  useEffect(() => {
    const handleRedirect = () => {
      if (stateCharacters.characters.length === 0) {
        navigate('/');
      }
    };

    handleRedirect();
  }, [stateCharacters.characters.length, navigate]);

  const characterCurrent = stateCharacters.characters.find((item) => {
    return item.id == id;
  });

  return <>{characterCurrent && characterCurrent.name}</>;
};
