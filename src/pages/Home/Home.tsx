import { useContext, useEffect } from 'react';
import { fetchData } from '../../api/requests';
import { CharactersContext } from '../../context/characters/CharactersContext';

export const Home = () => {
  const { currentPage, setCurrentPage, characters, setCharacters } =
    useContext(CharactersContext)!;

  useEffect(() => {
    const charactersFetchData = async () => {
      const response = await fetchData(currentPage);
      setCharacters(response);
    };

    charactersFetchData();
  }, [currentPage, setCharacters]);

  return (
    <div>
      <p>Soy la Home</p>
      {characters.length &&
        characters.map((character: { name: string; id: number }) => (
          <p key={character.id}>{character.name}</p>
        ))}
    </div>
  );
};
