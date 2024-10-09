import { SortingState } from "@tanstack/react-table";
import { SortParams } from "./types";

export const sortByToState = (sortBy: SortParams["sortBy"] | undefined): SortingState => {
  if (!sortBy) return [] as SortingState;
  const [id, desc] = sortBy.split(".");
  return [{ id, desc: desc === "desc" }];
};

export const stateToSortBy = (
  sorting: SortingState | undefined,
): SortParams["sortBy"] | undefined => {
  if (!sorting || sorting.length == 0) return undefined;
  const sort = sorting[0];
  return `${sort.id}.${sort.desc ? "desc" : "asc"}` as const;
};
