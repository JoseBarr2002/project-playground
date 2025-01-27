
import { Link } from "expo-router"

export function Breadcrumb() {
  return (
    <div className="mb-6 text-sm breadcrumbs">
      <nav className="flex space-x-2 text-muted-foreground">
        <Link href="/customers" className="hover:text-primary">
          Customers
        </Link>
        <span>/</span>
        <Link href="/customers/new-quote" className="hover:text-primary">
          New Quote
        </Link>
        <span>/</span>
        <span className="text-foreground">Billing Details</span>
      </nav>
    </div>
  )
}

