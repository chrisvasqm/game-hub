import { useQuery } from "@tanstack/react-query";
import genres from "../../data/genres";
import APIClient from "../../services/api-client";
import ms from "ms";
import Genre from "../../entities/Genre";

const client = new APIClient<Genre>('/genres');

const useGenres = () => useQuery({
  queryKey: ['genres'],
  queryFn: client.getAll,
  staleTime: ms('24h'),
  initialData: genres
})

export default useGenres;
