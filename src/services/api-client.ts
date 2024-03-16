import axios from 'axios';
import { CanceledError } from 'axios';

export { CanceledError };

export interface FetchDataResponse<T> {
  count: number;
  results: T[];
}

const apiClient = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: { key: '675af585f19843d596b1f429b55d94e7' }
});

export default apiClient;
