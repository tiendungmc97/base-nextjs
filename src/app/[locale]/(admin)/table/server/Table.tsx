"use client";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  OnChangeFn,
  PaginationOptions,
  PaginationState,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import { Filters } from "./api/types";
import { RowData } from "@tanstack/react-table";

declare module "@tanstack/react-table" {
  interface ColumnMeta<TData extends RowData, TValue> {
    filterKey?: keyof TData;
    filterVariant?: "text" | "number";
  }
}
import { DebouncedInput } from "./DebouncedInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleLeft,
  faAngleLeft,
  faAngleRight,
  faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";
export const DEFAULT_PAGE_INDEX = 0;
export const DEFAULT_PAGE_SIZE = 10;

type Props<T extends Record<string, string | number>> = {
  data: T[];
  columns: ColumnDef<T>[];
  pagination?: PaginationState;
  paginationOptions?: Pick<PaginationOptions, "onPaginationChange" | "rowCount">;
  filters?: Filters<T>;
  onFilterChange?: (dataFilters: Partial<T>) => void;
  sorting?: SortingState;
  onSortingChange?: OnChangeFn<SortingState>;
};

export default function TableServer<T extends Record<string, string | number>>({
  data,
  columns,
  pagination,
  paginationOptions,
  filters,
  onFilterChange,
  sorting,
  onSortingChange,
}: Props<T>) {
  const table = useReactTable({
    data,
    columns,
    state: { pagination, sorting },
    onSortingChange,
    ...paginationOptions,
    manualFiltering: true,
    manualSorting: true,
    manualPagination: true,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                const fieldMeta = header.column.columnDef.meta;
                return (
                  <th key={header.id} colSpan={header.colSpan}>
                    {header.isPlaceholder ? null : (
                      <>
                        <div
                          {...{
                            className: header.column.getCanSort()
                              ? "cursor-pointer select-none"
                              : "",
                            onClick: header.column.getToggleSortingHandler(),
                          }}
                        >
                          {flexRender(header.column.columnDef.header, header.getContext())}
                          {{
                            asc: " 🔼",
                            desc: " 🔽",
                            false: " 🔃",
                          }[header.column.getIsSorted() as string] ?? null}
                        </div>
                        {header.column.getCanFilter() && fieldMeta?.filterKey !== undefined ? (
                          <DebouncedInput
                            className="w-36 rounded border shadow"
                            onChange={(value) => {
                              onFilterChange &&
                                onFilterChange({
                                  [fieldMeta.filterKey as keyof T]: value,
                                } as Partial<T>);
                            }}
                            placeholder="Search..."
                            type={fieldMeta.filterVariant === "number" ? "number" : "text"}
                            value={filters?.[fieldMeta.filterKey] ?? ""}
                          />
                        ) : null}
                      </>
                    )}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => {
            return (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => {
                  return (
                    <td key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="my-2 flex items-center gap-2">
        <button
          className="rounded border p-1 disabled:cursor-not-allowed disabled:text-gray-500"
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
        >
          <FontAwesomeIcon icon={faAngleDoubleLeft} />
        </button>
        <button
          className="rounded border p-1 disabled:cursor-not-allowed disabled:text-gray-500"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>
        <button
          className="rounded border p-1 disabled:cursor-not-allowed disabled:text-gray-500"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
        <button
          className="rounded border p-1 disabled:cursor-not-allowed disabled:text-gray-500"
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
        >
          <FontAwesomeIcon icon={faAngleDoubleRight} />
        </button>
        <span className="flex items-center gap-1">
          <div>Page</div>
          <strong>
            {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
          </strong>
        </span>
        <span className="flex items-center gap-1">
          | Go to page:
          <input
            type="number"
            value={table.getState().pagination.pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              table.setPageIndex(page);
            }}
            className="w-16 rounded border p-1"
          />
        </span>
        <select
          value={table.getState().pagination.pageSize}
          onChange={(e) => {
            table.setPageSize(Number(e.target.value));
          }}
          className="rounded border p-1"
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
