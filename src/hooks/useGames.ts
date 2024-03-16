import { useQuery } from '@tanstack/react-query';
import { GameQuery } from '../App';
import apiClient from '../services/api-client';
import { FetchDataResponse } from '../services/api-client';
import { Platform } from './usePlatforms';

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[] | null;
  metacritic: number;
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) => useQuery<FetchDataResponse<Game>, Error>({
  queryKey: ['games', gameQuery],
  queryFn: () =>
    apiClient
      .get<FetchDataResponse<Game>>('/games', {
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText
        }
      })
      .then(response => response.data)
})

export default useGames;
