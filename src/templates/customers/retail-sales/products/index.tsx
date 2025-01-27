import { ProductForm } from "@templates/customers/retail-sales/productForm"
import { Link } from "expo-router"

export default function NewProductPage() {
  return (
    <div className="container mx-auto py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">New Product</h1>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <span>/</span>
          <Link href="/customers" className="hover:underline">
            Customers
          </Link>
          <span>/</span>
          <span>New Product</span>
        </div>
      </div>
      <div className="max-w-2xl">
        <ProductForm />
      </div>
    </div>
  )
}

