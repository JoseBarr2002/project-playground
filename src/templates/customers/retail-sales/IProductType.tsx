export interface Product {
  id: string
  name: string
  price: number
  cost: number
  taxRate: number
  description: string
  inventory?: number
}

export interface ProductFormData {
  name: string
  price: string
  cost: string
  taxRate: string
  description: string
}

