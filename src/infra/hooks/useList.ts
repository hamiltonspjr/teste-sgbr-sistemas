import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export interface useListResult<TDATA> {
  list: TDATA[];
  isError: boolean | null;
  isLoading: boolean;
  refresh: () => void;
}

export function useList<Data>(
  queryKey: readonly unknown[],
  getList: () => Promise<Data[]>
): useListResult<Data> {
  const [list, setList] = useState<Data[]>([]);

  const query = useQuery({
    queryKey,
    queryFn: () => getList(),
  });

  useEffect(() => {
    if (query.data) {
      setList(query.data);
    }
  }, [query.data]);

  return {
    list,
    isError: query.isError || false,
    isLoading: query.isLoading,
    refresh: query.refetch,
  };
}
