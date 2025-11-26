"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { useQuery } from "@tanstack/react-query";
import { getMovies } from "@/features/dashboard/services/table";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { Movie } from "@/features/dashboard/types/table";

const DashboardTable = () => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const { data: moviesData, isLoading } = useQuery({
    queryKey: ["movies", page],
    queryFn: () => getMovies(page),
  });

  const movies = moviesData ?? [];

  const columns: ColumnDef<Movie, any>[] = [
    { accessorKey: "id", header: "شماره", cell: (props) => props.getValue() },
    { accessorKey: "title", header: "نام", cell: (props) => props.getValue() },
    { accessorKey: "year", header: "سال انتشار", cell: (props) => props.getValue() },
    { accessorKey: "country", header: "کشور سازنده", cell: (props) => props.getValue() },
    { accessorKey: "imdb_rating", header: "رتبه imdb", cell: (props) => props.getValue() },
    { id: "watched", header: "مشاهده شد؟", cell: () => <Switch /> },
  ];

  const table = useReactTable({
    data: movies,
    columns,
    state: { globalFilter: search },
    onGlobalFilterChange: setSearch,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  const handleNextPage = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <div className="w-full p-4 space-y-4">
      <Input
        placeholder="جستجو..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full max-w-md"
      />

      <div className="rounded-2xl border shadow-sm overflow-auto" dir="ltr">
        {isLoading ? (
          <div className="p-4 animate-pulse">در حال دریافت ...</div>
        ) : (
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((hg) => (
                <TableRow key={hg.id}>
                  {hg.headers.map((header) => (
                    <TableHead key={header.id}>
                      {flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>

            <TableBody>
              {table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>

      <div className="flex justify-center">
        <button
          onClick={handleNextPage}
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
         صفحه بعدی
        </button>
      </div>
    </div>
  );
};

export default DashboardTable;
