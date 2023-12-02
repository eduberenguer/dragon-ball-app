import { useContext, useEffect } from 'react';
import { CharactersContext } from '../../context/characters/CharactersContext';
import { Character } from '../../models/characterTypes';

import { useCharacters } from '../../hooks/useCharacters';

export const Home = () => {
  const { getCharacters } = useCharacters();
  const { characters } = useContext(CharactersContext)!;

  useEffect(() => {
    const charactersFetchData = async () => {
      await getCharacters();
    };

    charactersFetchData();
  }, []);

  return (
    <div>
      <p>Soy la Home</p>
      {characters.length &&
        characters.map((character: Character) => (
          <p key={character.id}>{character.name}</p>
        ))}
    </div>
  );
};
