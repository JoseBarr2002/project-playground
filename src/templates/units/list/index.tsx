import { Button } from "@components/ui/button"
import { UnitsTable } from "./table"
import { FileDown, FileText, Plus } from "lucide-react"
import { Suspense } from "react"
import { TableSkeleton } from "./skeleton"

export default function UnitsListTemplate() {
  return (
    <div className="p-6 max-w-[1400px] mx-auto">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
              <a href="/" className="hover:text-primary">
                Home
              </a>
              <span>/</span>
              <a href="/units" className="hover:text-primary">
                Units
              </a>
              <span>/</span>
              <span className="text-foreground">Units List</span>
            </nav>
            <h1 className="text-2xl font-semibold">Units List</h1>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Plus className="h-4 w-4 mr-2" />
              Add Unit
            </Button>
            <Button variant="secondary" size="sm">
              <FileDown className="h-4 w-4 mr-2" />
              Export CSV
            </Button>
            <Button variant="secondary" size="sm">
              <FileText className="h-4 w-4 mr-2" />
              PDF
            </Button>
          </div>
        </div>
        <Suspense fallback={<TableSkeleton />}>
          <UnitsTable />
        </Suspense>
      </div>
    </div>
  )
}

