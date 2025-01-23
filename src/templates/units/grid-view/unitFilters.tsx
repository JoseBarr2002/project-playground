import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@components/ui/select"
import type { UnitStatus } from "./gridViewTypes"

interface UnitFiltersProps {
  selectedCategory: string
  setSelectedCategory: (category: string) => void
  filterStatus: string
  setFilterStatus: (status: string) => void
  sortBy: string
  setSortBy: (sortBy: string) => void
  statusColors: UnitStatus[]
}

export const UnitFilters: React.FC<UnitFiltersProps> = ({
  selectedCategory,
  setSelectedCategory,
  filterStatus,
  setFilterStatus,
  sortBy,
  setSortBy,
  statusColors,
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-6">
      <Select value={selectedCategory} onValueChange={setSelectedCategory}>
        <SelectTrigger className="w-full md:w-[180px]">
          <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Categories</SelectItem>
          <SelectItem value="Climate Controlled">Climate Controlled</SelectItem>
          <SelectItem value="Parking Space">Parking Space</SelectItem>
          <SelectItem value="RV Storage">RV Storage</SelectItem>
          <SelectItem value="Storage Unit">Storage Unit</SelectItem>
        </SelectContent>
      </Select>

      <Select value={filterStatus} onValueChange={setFilterStatus}>
        <SelectTrigger className="w-full md:w-[180px]">
          <SelectValue placeholder="Status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Statuses</SelectItem>
          {statusColors.map((status) => (
            <SelectItem key={status.name} value={status.name}>
              {status.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select value={sortBy} onValueChange={setSortBy}>
        <SelectTrigger className="w-full md:w-[180px]">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="id">Unit Number</SelectItem>
          <SelectItem value="price">Price</SelectItem>
          <SelectItem value="size">Size</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

