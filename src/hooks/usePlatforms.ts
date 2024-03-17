import { useQuery } from '@tanstack/react-query';
import platforms from '../data/platforms';
import APIClient from '../services/api-client';
import ms from 'ms';

const client = new APIClient<Platform>('/platforms/lists/parents');

export interface Platform {
    id: number;
    name: string;
    slug: string;
    results: Platform[]
}

const usePlatforms = () => useQuery({
    queryKey: ['platforms'],
    queryFn: client.getAll,
    staleTime: ms('24h'),
    initialData: { count: platforms.length, results: platforms }
})

export default usePlatforms;
