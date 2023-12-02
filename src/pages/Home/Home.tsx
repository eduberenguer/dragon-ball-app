import { useContext, useEffect } from 'react';
import { CharactersContext } from '../../context/characters/CharactersContext';
import { Character } from '../../models/characterTypes';

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
          <p key={character.id}>{character.name}</p>
        ))}
    </div>
  );
};
