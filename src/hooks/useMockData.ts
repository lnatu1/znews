import useSWR from "swr";

export function useMockData<T>(endpoint: string) {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data, error, isLoading } = useSWR<T>(`/api/${endpoint}`, fetcher);

  return {
    data,
    error,
    isLoading,
  };
}
