import { useEffect, useState } from 'react';
import apiClient, { CanceledError } from '../services/api-client';

interface Genre {
  id: number;
  name: string;
}

interface GetGenresResponse {
  count: number;
  results: Genre[];
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<GetGenresResponse>('/genres', { signal: controller.signal })
      .then(response => {
        setGenres(response.data.results);
        setLoading(false);
      })
      .catch(error => {
        if (error instanceof CanceledError) return;

        setError(error.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { genres, error, isLoading };
};

export default useGenres;
