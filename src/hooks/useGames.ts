import useData from './useData';
import { Genre } from './useGenres';
import { GameQuery } from '../App';

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (gameQuery: GameQuery) =>
  useData<Game>('/games', [gameQuery], {
    params: { genres: gameQuery.genre?.id, platforms: gameQuery.platform?.id }
  });

export default useGames;
