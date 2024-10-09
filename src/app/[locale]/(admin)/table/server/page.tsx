"use client";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { ColumnDef } from "@tanstack/react-table";
import { useMemo, useState } from "react";
import { fetchUsers, User, UserFilters } from "./api/user";
import TableServer, { DEFAULT_PAGE_INDEX, DEFAULT_PAGE_SIZE } from "./Table";
import { sortByToState, stateToSortBy } from "./api/util";

export interface ITableServerProps {}

const USER_COLUMNS: ColumnDef<User>[] = [
  {
    accessorKey: "id",
    header: () => <span>ID</span>,
    meta: { filterKey: "id", filterVariant: "number" },
  },
  {
    accessorKey: "firstName",
    header: () => <span>First Name</span>,
    meta: { filterKey: "firstName" },
  },
  {
    accessorKey: "lastName",
    header: () => <span>Last Name</span>,
    meta: { filterKey: "lastName" },
  },
  {
    accessorKey: "age",
    header: () => "Age",
    meta: { filterKey: "age", filterVariant: "number" },
  },
];

export default function PageTable(props: ITableServerProps) {
  const [filters, setFilters] = useState<UserFilters>({} as UserFilters);
  const { data } = useQuery({
    queryKey: ["users", filters],
    queryFn: () => fetchUsers(filters),
    placeholderData: keepPreviousData,
  });
  const paginationState = {
    pageIndex: filters.pageIndex ?? DEFAULT_PAGE_INDEX,
    pageSize: filters.pageSize ?? DEFAULT_PAGE_SIZE,
  };
  const sortingState = sortByToState(filters?.sortBy);
  const columns = useMemo(() => USER_COLUMNS, []);
  const resetFilters = () => setFilters({});

  return (
    <div className="flex flex-col gap-2 p-2">
      <TableServer
        data={data?.result ?? []}
        columns={columns}
        pagination={paginationState}
        paginationOptions={{
          onPaginationChange: (pagination) => {
            const newSortingState =
              typeof pagination === "function" ? pagination(paginationState) : pagination;
            setFilters({ ...filters, ...newSortingState });
          },
          rowCount: data?.rowCount,
        }}
        filters={filters}
        onFilterChange={(filter) => setFilters({ ...filters, ...filter })}
        sorting={sortingState}
        onSortingChange={(updaterOrValue) => {
          const newSortingState =
            typeof updaterOrValue === "function" ? updaterOrValue(sortingState) : updaterOrValue;
          return setFilters({ ...filters, sortBy: stateToSortBy(newSortingState) });
        }}
      />
      <div className="flex items-center gap-2">
        {data?.rowCount} users found
        <button
          className="rounded border p-1 disabled:cursor-not-allowed disabled:text-gray-500"
          onClick={resetFilters}
          disabled={Object.keys(filters).length === 0}
        >
          Reset Filters
        </button>
      </div>
      <pre>{JSON.stringify(filters, null, 2)}</pre>
    </div>
  );
}
