import { ChevronRight } from "lucide-react"

export default function Breadcrumb() {
  return (
    <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
      <a href="#" className="hover:text-primary">
        Home
      </a>
      <ChevronRight className="w-4 h-4" />
      <a href="#" className="hover:text-primary">
        Setup
      </a>
      <ChevronRight className="w-4 h-4" />
      <span className="text-primary font-medium">Mass Edit Rental Prices</span>
    </nav>
  )
}

