"use server"

import { revalidatePath } from "next/cache"
import type { ProductFormData } from "./IProductType"

let products = [
  {
    id: "1",
    name: "Chargeback credit card fee ($35.00)",
    price: 35.0,
    cost: 0.0,
    taxRate: 0,
    description: "Jimmy French card 1-1-2021 charged back",
    inventory: 1,
  },
  {
    id: "2",
    name: "Charged back Credit card (monthly rent recovery)",
    price: 50.0,
    cost: 0.0,
    taxRate: 0,
    description: "charged back rent on 1-1-2021.",
    inventory: 1,
  },
]

export async function createProduct(formData: ProductFormData) {
  const newProduct = {
    id: Math.random().toString(36).substring(7),
    name: formData.name,
    price: Number.parseFloat(formData.price),
    cost: Number.parseFloat(formData.cost),
    taxRate: Number.parseFloat(formData.taxRate),
    description: formData.description,
    inventory: 1,
  }

  products.push(newProduct)
  revalidatePath("/products")
  return { success: true }
}

export async function getProducts() {
  return products
}

export async function deleteProduct(id: string) {
  products = products.filter((p) => p.id !== id)
  revalidatePath("/products")
  return { success: true }
}

