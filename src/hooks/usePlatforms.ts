import { useQuery } from '@tanstack/react-query';
import { FetchDataResponse } from '../services/api-client';
import { Platform } from './useGames';
import apiClient from '../services/api-client';
import platforms from '../data/platforms';

const usePlatforms = () => useQuery<FetchDataResponse<Platform>, Error>({
    queryKey: ['platforms'],
    queryFn: () =>
        apiClient
            .get<FetchDataResponse<Platform>>('/platforms/lists/parents')
            .then(response => response.data),
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    initialData: { count: platforms.length, results: platforms }
})

export default usePlatforms;
