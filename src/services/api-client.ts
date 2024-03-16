import axios, { AxiosRequestConfig } from 'axios';
import { CanceledError } from 'axios';

export { CanceledError };

export interface FetchDataResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

const instance = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: { key: '675af585f19843d596b1f429b55d94e7' }
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return instance.get<FetchDataResponse<T>>(this.endpoint, config)
      .then(response => response.data)
  }
}

export default APIClient;
