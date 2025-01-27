import { Button } from "@components/ui/button"
import { Input } from "@components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@components/ui/select"
import { useRouter, useSearchParams } from "next/navigation"
import { useCallback, useState } from "react"

export function CustomersFilters() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [search, setSearch] = useState(searchParams?.get("search") ?? "")

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

  const handleSearch = () => {
    router.push(`/customers?${createQueryString({ search, page: "1" })}`)
  }

  return (
    <div className="flex gap-4 items-end">
      <div className="flex-1">
        <Input
          placeholder="Search customers..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSearch()}
        />
      </div>
      <Select
        defaultValue={searchParams?.get("status") ?? "all"}
        onValueChange={(value) => {
          router.push(`/customers?${createQueryString({ status: value, page: "1" })}`)
        }}
      >
        <SelectTrigger className="w-[120px]">
          <SelectValue placeholder="Status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Status</SelectItem>
          <SelectItem value="active">Active</SelectItem>
          <SelectItem value="inactive">Inactive</SelectItem>
        </SelectContent>
      </Select>
      <Select
        defaultValue={searchParams?.get("perPage") ?? "25"}
        onValueChange={(value) => {
          router.push(`/customers?${createQueryString({ perPage: value, page: "1" })}`)
        }}
      >
        <SelectTrigger className="w-[120px]">
          <SelectValue placeholder="Per Page" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="25">25 Per Page</SelectItem>
          <SelectItem value="50">50 Per Page</SelectItem>
          <SelectItem value="100">100 Per Page</SelectItem>
        </SelectContent>
      </Select>
      <Select
        defaultValue={searchParams?.get("sort") ?? "name"}
        onValueChange={(value) => {
          router.push(`/customers?${createQueryString({ sort: value, page: "1" })}`)
        }}
      >
        <SelectTrigger className="w-[120px]">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="name">Sort by Name</SelectItem>
          <SelectItem value="balance">Sort by Balance</SelectItem>
          <SelectItem value="rentals">Sort by Rentals</SelectItem>
        </SelectContent>
      </Select>
      <Button onClick={handleSearch}>Search</Button>
    </div>
  )
}

