import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"
import { Tooltip, TooltipContent, TooltipTrigger } from "@components/ui/tooltip"

export function Breadcrumb() {
  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-600" aria-label="Breadcrumb">
      <Tooltip>
        <TooltipTrigger asChild>
          <Link href="/" className="hover:text-gray-900 flex items-center">
            <Home className="h-4 w-4" />
            <span className="sr-only">Home</span>
          </Link>
        </TooltipTrigger>
        <TooltipContent>Go to homepage</TooltipContent>
      </Tooltip>

      <ChevronRight className="h-4 w-4" />

      <Tooltip>
        <TooltipTrigger asChild>
          <Link href="/communications/email-txt-print" className="hover:text-gray-900">
            Communications
          </Link>
        </TooltipTrigger>
        <TooltipContent>Go to Communications</TooltipContent>
      </Tooltip>

      <ChevronRight className="h-4 w-4" />
      <span className="text-gray-900">Create Print Batch</span>
    </nav>
  )
}

