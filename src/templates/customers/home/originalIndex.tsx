import { Suspense } from "react"
import { CustomersHeader } from "./customersHeader"
import { CustomersFilters } from "./customerFilters"
import { CustomersTable } from "./customerTable"
import { CustomersPagination } from "./customersPagination"
import { CustomersTableSkeleton } from "./tableSkeleton"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@components/ui/breadcrumb"
import { getCustomers } from "@templates/customers/home/actions"

export default async function ExperimentalCustomersTemplate({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const page = Number(searchParams.page) || 1
  const perPage = Number(searchParams.perPage) || 25
  const search = typeof searchParams.search === "string" ? searchParams.search : undefined
  const status = typeof searchParams.status === "string" ? searchParams.status : undefined
  const sort = typeof searchParams.sort === "string" ? searchParams.sort : undefined

  const { customers, totalCustomers } = await getCustomers({ page, perPage, search, status, sort })

  return (
    <>
    <div className="container mx-auto py-6">
      <div className="flex flex-col gap-6">
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>Customers</BreadcrumbItem>
        </Breadcrumb>

        <CustomersHeader totalCustomers={totalCustomers} />
        <CustomersFilters />

        <Suspense fallback={<CustomersTableSkeleton />}>
          <CustomersTable customers={customers} />
        </Suspense>

        <CustomersPagination totalCustomers={totalCustomers} />
      </div>
    </div>
    </>
  )
}

