import { useEffect, useState } from 'react';
import { fetchData } from '../../api/requests';

export const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);

  useEffect(() => {
    const charactersFetchData = async () => {
      const response = await fetchData(currentPage);
      setData(response);
    };

    charactersFetchData();
  }, []);

  return (
    <div>
      <p>Soy la Home</p>
      {data.length &&
        data.map((character: { name: string; id: number }) => (
          <p key={character.id}>{character.name}</p>
        ))}
    </div>
  );
};
