import { Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';

interface Game {
  id: number;
  name: string;
}

interface GetGamesResponse {
  count: number;
  results: Game[];
}

function GameGrid() {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    apiClient
      .get<GetGamesResponse>('/games')
      .then(response => setGames(response.data.results))
      .catch(error => {
        setError(error.message);
      });
  }, []);

  return (
    <>
      {error && <Text color='red'>{error}</Text>}
      <ul>
        {games.map(game => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
}

export default GameGrid;
