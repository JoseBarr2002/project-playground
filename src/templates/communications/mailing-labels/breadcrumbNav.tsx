import { Link } from "expo-router"
import { ChevronRight } from "lucide-react"

export default function BreadcrumbNav() {
  return (
    <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-4">
      <Link href="/dashboard-1" className="hover:text-primary">
        Home
      </Link>
      <ChevronRight className="h-4 w-4" />
      <Link href="/customers" className="hover:text-primary">
        Customers
      </Link>
      <ChevronRight className="h-4 w-4" />
      <span className="text-primary font-medium">Mailing labels</span>
    </nav>
  )
}

