import { useQuery } from '@tanstack/react-query';
import platforms from '../data/platforms';
import APIClient from '../services/api-client';
import ms from 'ms';
import Platform from '../entities/Platform';

const client = new APIClient<Platform>('/platforms/lists/parents');

const usePlatforms = () => useQuery({
    queryKey: ['platforms'],
    queryFn: client.getAll,
    staleTime: ms('24h'),
    initialData: platforms
})

export default usePlatforms;
