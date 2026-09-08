import useSWR from 'swr';
import axios from 'axios';

const fetcher = (url: string) => axios.get(url).then(res => res.data);

export const useCardPrices = () => {
  const { data, error } = useSWR('/api/prices', fetcher, { refreshInterval: 60000 });
  return {
    prices: data,
    isLoading: !error && !data,
    isError: error,
  };
};
