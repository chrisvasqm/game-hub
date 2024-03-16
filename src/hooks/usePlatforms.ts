import { useQuery } from '@tanstack/react-query';
import { FetchDataResponse } from './useData';
import { Platform } from './useGames';
import apiClient from '../services/api-client';

const usePlatforms = () => useQuery({
    queryKey: ['platforms'],
    queryFn: () =>
        apiClient
            .get<FetchDataResponse<Platform>>('/platforms/lists/parents')
            .then(response => response.data)
})

export default usePlatforms;
