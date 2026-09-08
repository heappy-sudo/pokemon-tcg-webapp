import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useCardSearch = (query: string) => {
  return useQuery(['searchCards', query], async () => {
    const { data } = await axios.get(`/api/cards?name=${query}`);
    return data;
  });
};
