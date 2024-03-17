import { useInfiniteQuery } from '@tanstack/react-query';
import { GameQuery } from '../App';
import APIClient, { FetchDataResponse } from '../services/api-client';
import { Platform } from './usePlatforms';
import ms from 'ms';

const client = new APIClient<Game>('/games');

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[] | null;
  metacritic: number;
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) => useInfiniteQuery<FetchDataResponse<Game>, Error>({
  queryKey: ['games', gameQuery],
  queryFn: ({ pageParam = 1 }) => client.getAll({
    params: {
      genres: gameQuery.genreId,
      parent_platforms: gameQuery.platformId,
      ordering: gameQuery.sortOrder,
      search: gameQuery.searchText,
      page: pageParam
    }
  }),
  getNextPageParam: (lastPage, allPages) => {
    return lastPage.next ? allPages.length + 1 : undefined;
  },
  staleTime: ms('24h')
})

export default useGames;
