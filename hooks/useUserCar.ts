"use client";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const useUserCar = () => {
  const { data, error, isLoading, mutate } = useSWR("/api/car/user", fetcher);

  return {
    cars: data || [],
    isLoading,
    isError: error,
    mutate,
  };
};
