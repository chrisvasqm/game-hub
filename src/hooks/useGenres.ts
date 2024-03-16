import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import apiClient from "../services/api-client";
import { FetchDataResponse } from "../services/api-client";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => useQuery({
  queryKey: ['genres'],
  queryFn: () =>
    apiClient
      .get<FetchDataResponse<Genre>>('/genres')
      .then(response => response.data),
  staleTime: 24 * 60 * 60 * 1000, // 24 hours
  initialData: { count: genres.length, results: genres }
})

export default useGenres;
