import { useContext, useEffect } from 'react';
import { CharactersContext } from '../../context/characters/CharactersContext';
import { Character } from '../../models/characterTypes';
import { Link } from 'react-router-dom';

export const Home = () => {
  const { stateCharacters, getCharacters } = useContext(CharactersContext);

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <div>
      <p>Soy la Home</p>
      {stateCharacters.characters.length &&
        stateCharacters.characters.map((character: Character) => (
          <div>
            <Link to={`/details/${character.id}`}>
              <p key={character.id}>{character.name}</p>
            </Link>
          </div>
        ))}
    </div>
  );
};
