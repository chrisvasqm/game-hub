import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import APIClient from "../services/api-client";
import { Game } from "./useGames";

const client = new APIClient<Game>('/games');

const useGame = (slug: string) => useQuery<Game, Error, Game>({
    queryKey: ['games', slug],
    queryFn: () => client.find(slug),
    staleTime: ms('24h')
})

export default useGame;