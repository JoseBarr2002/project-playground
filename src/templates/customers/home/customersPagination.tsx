import { Button } from "@components/ui/button"
import { useRouter, useLocalSearchParams } from "expo-router"
import { useCallback } from "react"

interface CustomersPaginationProps {
  totalCustomers: number
}

export function CustomersPagination({ totalCustomers }: CustomersPaginationProps) {
  const router = useRouter()
  const searchParams = useLocalSearchParams()

  const page = Number(searchParams?.get("page")) || 1
  const perPage = Number(searchParams?.get("perPage")) || 25
  const totalPages = Math.ceil(totalCustomers / perPage)

  const createQueryString = useCallback(
    (params: Record<string, string>) => {
      const newSearchParams = new URLSearchParams(searchParams?.toString())

      for (const [key, value] of Object.entries(params)) {
        if (value === null) {
          newSearchParams.delete(key)
        } else {
          newSearchParams.set(key, value)
        }
      }

      return newSearchParams.toString()
    },
    [searchParams],
  )

  return (
    <div className="flex items-center justify-between">
      <div className="text-sm text-muted-foreground">
        Displaying customers {(page - 1) * perPage + 1} - {Math.min(page * perPage, totalCustomers)} of {totalCustomers}{" "}
        in total
      </div>
      <div className="flex gap-1">
        <Button
          variant={page === 1 ? "outline" : "ghost"}
          size="sm"
          disabled={page === 1}
          onClick={() => {
            router.push(`/customers?${createQueryString({ page: String(page - 1) })}`)
          }}
        >
          Previous
        </Button>
        {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
          const pageNumber = page + i - 2
          if (pageNumber < 1 || pageNumber > totalPages) return null
          return (
            <Button
              key={pageNumber}
              variant={pageNumber === page ? "outline" : "ghost"}
              size="sm"
              onClick={() => {
                router.push(`/customers?${createQueryString({ page: String(pageNumber) })}`)
              }}
            >
              {pageNumber}
            </Button>
          )
        })}
        {page < totalPages && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              router.push(`/customers?${createQueryString({ page: String(page + 1) })}`)
            }}
          >
            Next
          </Button>
        )}
      </div>
    </div>
  )
}

