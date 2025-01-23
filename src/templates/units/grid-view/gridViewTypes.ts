import type { ReactNode } from "react"

export interface UnitStatus {
  name: string
  color: string
}

export interface Unit {
  id: string
  type: string
  size: string
  status: string
  price: number
  lastAccessed?: string
  tenant?: string
  dueDate?: string
}

export interface CategorySummary {
  name: string
  total: number
  available: number
  icon: ReactNode
}

