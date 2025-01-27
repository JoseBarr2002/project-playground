import { Button } from "@components/ui/button"
import { ProductsTable } from "@templates/customers/retail-sales/productsTable"
import { getProducts } from "@templates/customers/retail-sales/actions"
import { Link } from "expo-router"

export default async function RetailSalesTemplate() {
  const products = await getProducts()

  return (
    <>
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Retail Sale</h1>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span>/</span>
            <Link href="/customers" className="hover:underline">
              Customers
            </Link>
            <span>/</span>
            <span>Retail Sale</span>
          </div>
          </div>
          <Button size="sm" asChild>
            <Link href="/customers/retail-sales/product">Add a Product</Link>
          </Button>
        </div>
      <div className="space-y-4">
        <p className="text-gray-500">
          Products can be sold while renting a unit to a tenant or added separately later.
        </p>
        <ProductsTable products={products} />
      </div>
    </div>
    </>
  )
}

