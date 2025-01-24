"use client"

import { Input } from "@components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@components/ui/select"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@components/ui/tooltip"
import { UNIT_STATUSES } from "./IUnit"
import type { Table } from "@tanstack/react-table"

interface UnitsToolbarProps<TData> {
  table: Table<TData>
  globalFilter: string
  setGlobalFilter: (value: string) => void
}

export function UnitsToolbar<TData>({ table, globalFilter, setGlobalFilter }: UnitsToolbarProps<TData>) {
  return (
    <TooltipProvider>
      <div className="flex items-center justify-between gap-4">
        <div className="flex flex-1 items-center gap-2">
          <Input
            placeholder="Search all columns..."
            value={globalFilter ?? ""}
            onChange={(event) => setGlobalFilter(event.target.value)}
            className="max-w-sm"
          />
          <Tooltip>
            <TooltipTrigger asChild>
              <span className="text-sm text-muted-foreground">{table.getFilteredRowModel().rows.length} units</span>
            </TooltipTrigger>
            <TooltipContent>
              <p>Total filtered units</p>
            </TooltipContent>
          </Tooltip>
        </div>
        <Select
          onValueChange={(value) => {
            table.getColumn("status")?.setFilterValue(value === "All" ? "" : value)
          }}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="All statuses" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All statuses</SelectItem>
            {UNIT_STATUSES.map((status) => (
              <SelectItem key={status} value={status}>
                {status}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </TooltipProvider>
  )
}

