import { Input } from "@components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@components/ui/select"
import { Button } from "@components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@components/ui/tooltip"
import { Search, ArrowUpDown } from "lucide-react"
import type { SortOption, SortDirection } from "./IFee"

interface SearchAndSortProps {
  searchTerm: string
  onSearchChange: (value: string) => void
  sortOption: SortOption
  onSortOptionChange: (value: SortOption) => void
  sortDirection: SortDirection
  onSortDirectionToggle: () => void
}

export function SearchAndSort({
  searchTerm,
  onSearchChange,
  sortOption,
  onSortOptionChange,
  sortDirection,
  onSortDirectionToggle,
}: SearchAndSortProps) {
  return (
    <div className="flex gap-4 mb-6">
      <div className="flex-1">
        <Input
          placeholder="Search fees..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full"
          icon={<Search className="h-4 w-4 text-gray-500" />}
        />
      </div>
      <Select value={sortOption} onValueChange={onSortOptionChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="name">Name</SelectItem>
          <SelectItem value="amount">Amount</SelectItem>
          <SelectItem value="created">Date Created</SelectItem>
        </SelectContent>
      </Select>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" size="icon" onClick={onSortDirectionToggle}>
              <ArrowUpDown className="h-4 w-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Toggle sort direction</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}

