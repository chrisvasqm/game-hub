import { useQuery } from '@tanstack/react-query';
import ms from 'ms';
import Trailer from '../entities/Trailer';
import APIClient from '../services/api-client';

const useTrailer = (id: number | string) => {
    const client = new APIClient<Trailer>(`/games/${id}/movies`)

    return useQuery({
        queryKey: ['trailers', id],
        queryFn: client.getAll,
        staleTime: ms('24h')
    })
}

export default useTrailer;