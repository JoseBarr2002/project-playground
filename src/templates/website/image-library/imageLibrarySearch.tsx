import { Input } from "@components/ui/input"
import { Search } from "lucide-react"

interface ImageLibrarySearchProps {
  searchQuery: string
  onSearchChange: (query: string) => void
  totalImages: number
}

export function ImageLibrarySearch({ searchQuery, onSearchChange, totalImages }: ImageLibrarySearchProps) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-6">
      <div className="relative w-full sm:max-w-xs">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search images..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-9 w-full"
        />
      </div>
      <p className="text-sm text-muted-foreground">
        {totalImages} images • Last updated {new Date().toLocaleDateString()}
      </p>
    </div>
  )
}

