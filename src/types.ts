export type PaginatedResponse<TData> = {
  limit: 10;
  page: number;
  totalPages: number;
  count: number;
  results: TData[];
};
