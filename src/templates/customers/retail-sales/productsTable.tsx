"use client"

import { useState } from "react"
import { useRouter } from "expo-router"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@components/ui/table"
import { Button } from "@components/ui/button"
import type { Product } from "@templates/customers/retail-sales/IProductType"
import { deleteProduct } from "@templates/customers/retail-sales/actions"

interface ProductsTableProps {
  products: Product[]
}

export function ProductsTable({ products }: ProductsTableProps) {
  const router = useRouter()
  const [isDeleting, setIsDeleting] = useState<string | null>(null)

  const handleDelete = async (id: string) => {
    setIsDeleting(id)
    try {
      await deleteProduct(id)
      router.refresh()
    } catch (error) {
      console.error(error)
    }
    setIsDeleting(null)
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Cost</TableHead>
            <TableHead>Tax rate</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Inventory</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell>{product.name}</TableCell>
              <TableCell>${product.price.toFixed(2)}</TableCell>
              <TableCell>${product.cost.toFixed(2)}</TableCell>
              <TableCell>{(product.taxRate * 100).toFixed(0)}%</TableCell>
              <TableCell className="max-w-[300px] truncate">{product.description}</TableCell>
              <TableCell>{product.inventory}</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={() => router.push(`/products/${product.id}/edit`)}>
                    Edit
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    disabled={isDeleting === product.id}
                    onClick={() => handleDelete(product.id)}
                  >
                    Delete
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

