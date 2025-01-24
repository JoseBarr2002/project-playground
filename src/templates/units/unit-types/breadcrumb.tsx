import { ChevronRight, Home } from "lucide-react"
import { Link } from "expo-router"

export function UnitBreadcrumb() {
  return (
    <nav className="flex items-center space-x-1 text-sm text-muted-foreground">
      <Link href="/" className="flex items-center hover:text-foreground">
        <Home className="h-4 w-4" />
        <span className="sr-only">Home</span>
      </Link>
      <ChevronRight className="h-4 w-4" />
      <Link href="/units" className="hover:text-foreground">
        Units
      </Link>
    </nav>
  )
}

