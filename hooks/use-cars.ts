"use client";

import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const useCars = () => {
  const { data, error, isLoading, mutate } = useSWR("/api/car", fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    dedupingInterval: 60000, // Revalidar cada minuto
  });

  return {
    cars: data || [],
    isLoading,
    isError: error,
    mutate,
  };
};
