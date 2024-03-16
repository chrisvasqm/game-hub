import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import apiClient, { CanceledError } from '../services/api-client';

export interface FetchDataResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(
  endpoint: string,
  dependencies?: any[],
  config?: AxiosRequestConfig
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);

  useEffect(
    () => {
      const controller = new AbortController();

      setLoading(true);
      apiClient
        .get<FetchDataResponse<T>>(endpoint, {
          signal: controller.signal,
          ...config
        })
        .then(response => {
          setData(response.data.results);
          setLoading(false);
        })
        .catch(error => {
          if (error instanceof CanceledError) return;

          setError(error.message);
          setLoading(false);
        });

      return () => controller.abort();
    },
    dependencies ? [...dependencies] : []
  );

  return { data, error, isLoading };
};

export default useData;
