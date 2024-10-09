"use client";
import React, { HTMLProps, useEffect, useMemo, useState } from "react";
import { makeData, Person } from "./makeData";

import {
  ColumnDef,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import TableClient from "./TableClient";
import DetailItem from "./DetailItem";
export interface IndexedPerson extends Person {
  index: number;
}

export default function PageClient() {
  const [rowSelection, setRowSelection] = useState({});
  const [globalFilter, setGlobalFilter] = useState("");
  const [sortType, setSortType] = useState("null");
  const [data, setData] = useState(() => makeData(100));
  const [sorting, setSorting] = useState<SortingState>([]);
  const [itemSelected, setItemSelected] = useState<IndexedPerson>({} as IndexedPerson);
  const columns: ColumnDef<Person>[] = useMemo(
    () => [
      {
        id: "select",
        header: ({ table }) => (
          <IndeterminateCheckbox
            {...{
              checked: table.getIsAllRowsSelected(),
              indeterminate: table.getIsSomeRowsSelected(),
              onChange: table.getToggleAllRowsSelectedHandler(),
            }}
          />
        ),
        cell: ({ row }) => (
          <div className="px-1">
            <IndeterminateCheckbox
              {...{
                checked: row.getIsSelected(),
                disabled: !row.getCanSelect(),
                indeterminate: row.getIsSomeSelected(),
                onChange: row.getToggleSelectedHandler(),
              }}
            />
          </div>
        ),
      },
      {
        accessorKey: "firstName",
        cell: (info) => info.getValue(),
        footer: (props) => <div>2312312</div>,
      },
      {
        accessorFn: (row) => row.lastName,
        id: "lastName",
        cell: (info) => info.getValue(),
        header: () => <span>Last Name</span>,
        footer: (props) => props.column.id,
        enableSorting: false,
      },
      {
        accessorKey: "age",
        header: () => "Age",
        footer: (props) => props.column.id,
      },
      {
        accessorKey: "progress",
        header: "Profile Progress",
        footer: (props) => props.column.id,
      },
      {
        accessorKey: "status",
        header: "Status",
        footer: (props) => props.column.id,
        enableSorting: false,
      },
      {
        accessorKey: "edit",
        cell: (info) => {
          return (
            <button
              onClick={() => setItemSelected({ ...info.row.original, index: info.row.index })}
            >
              Edit
            </button>
          );
        },
      },
    ],
    [],
  );
  const onSortingChange = (state: any) => {
    setSorting(state);
    const isSorted = state.length > 0;
    if (!isSorted) {
      setSortType("null");
      return;
    }
    const name = state[0]?.desc ? `${state[0]?.id}.desc` : `${state[0]?.id}.asc`;
    setSortType(name);
  };
  const table = useReactTable({
    data,
    columns,
    state: {
      rowSelection,
      sorting,
    },
    // enableRowSelection: true, //enable row selection for all rows
    enableRowSelection: (row) => row.original.age > 18, // or enable row selection conditionally per row
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    // debugTable: true,
    getSortedRowModel: getSortedRowModel(), //client-side sorting
    onSortingChange: onSortingChange, //optionally control sorting state in your own scope for easy access
    // sortingFns: {
    //   sortStatusFn, //or provide our custom sorting function globally for all columns to be able to use
    // },
    //no need to pass pageCount or rowCount with client-side pagination as it is calculated automatically
    autoResetPageIndex: false, // turn off page index reset when sorting or filtering - default on/true
    // enableMultiSort: false, //Don't allow shift key to sort multiple columns - default on/true
    // enableSorting: false, // - default on/true
    // enableSortingRemoval: false, //Don't allow - default on/true
    // isMultiSortEvent: (e) => true, //Make all clicks multi-sort - default requires `shift` key
    // maxMultiSortColCount: 3, // only allow 3 columns to be sorted at once - default is Infinity
  });

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    let sortBy: SortingState = [];

    if (value === "firstName.asc") {
      sortBy = [{ id: "firstName", desc: false }];
    } else if (value === "firstName.desc") {
      sortBy = [{ id: "firstName", desc: true }];
    } else if (value === "age.asc") {
      sortBy = [{ id: "age", desc: false }];
    } else if (value === "age.desc") {
      sortBy = [{ id: "age", desc: true }];
    }

    setSorting(sortBy);
    setSortType(value);
  };

  useEffect(() => {
    table.setGlobalFilter(globalFilter);
  }, [globalFilter]);

  useEffect(() => {
    table.setSorting(sorting);
  }, [sorting]);

  const handleSave = (updateData: IndexedPerson) => {
    setData((prev) => {
      const index = updateData.index;
      const newData = [...prev];
      newData[index] = updateData;
      return newData;
    });
  };
  return (
    <div className="p-2">
      <div className="flex justify-between">
        <input
          value={globalFilter ?? ""}
          onChange={(e) => {
            setGlobalFilter(e.target.value);
          }}
          className="font-lg rounded border border-gray-300 p-2 shadow"
          placeholder="Search all columns..."
        />
        <select
          name="sort"
          onChange={handleSortChange}
          value={sortType}
          className="rounded border border-gray-300 p-2"
        >
          <option value="null">null</option>
          <option value="firstName.asc">asc first name</option>
          <option value="firstName.desc">desc first name</option>
          <option value="age.asc">asc age</option>
          <option value="age.desc">desc age</option>
        </select>
      </div>
      {itemSelected.index !== undefined && <DetailItem item={itemSelected} setItem={handleSave} />}
      <div className="h-2" />
      <TableClient table={table} />
    </div>
  );
}

function IndeterminateCheckbox({
  indeterminate,
  className = "",
  ...rest
}: { indeterminate?: boolean } & HTMLProps<HTMLInputElement>) {
  const ref = React.useRef<HTMLInputElement>(null!);

  React.useEffect(() => {
    if (typeof indeterminate === "boolean") {
      ref.current.indeterminate = !rest.checked && indeterminate;
    }
  }, [ref, indeterminate]);

  return <input type="checkbox" ref={ref} className={className + " cursor-pointer"} {...rest} />;
}
