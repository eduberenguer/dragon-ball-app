import { useContext, useEffect } from 'react';
import { CharactersContext } from '../../context/characters/characters.context';
import { Character } from '../../models/character.types';
import { Card } from '../../components/card/card';

export const Home = () => {
  const { stateCharacters, getCharacters } = useContext(CharactersContext);

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <div>
      {stateCharacters.characters.length &&
        stateCharacters.characters.map((character: Character) => (
          <Card {...character} key={character.id} />
        ))}
    </div>
  );
};
