import { Button } from "@components/ui/button"
import { FileDown, FileIcon, Plus } from "lucide-react"
import { Link } from "expo-router"

interface CustomersHeaderProps {
  totalCustomers: number
}

export function CustomersHeader({ totalCustomers }: CustomersHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">Customers</h1>
        <p className="text-sm text-muted-foreground mt-1">Manage your {totalCustomers} customers</p>
      </div>
      <div className="flex gap-2">
        <Button asChild>
          <Link href="/customers/new">
            <Plus className="w-4 h-4 mr-2" />
            New Customer
          </Link>
        </Button>
        <Button variant="outline">
          <FileDown className="w-4 h-4 mr-2" />
          Export CSV
        </Button>
        <Button variant="outline">
          <FileIcon className="w-4 h-4 mr-2" />
          PDF
        </Button>
      </div>
    </div>
  )
}

