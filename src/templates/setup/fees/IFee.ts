export interface Fee {
    id: string
    name: string
    amount: number
    taxRate?: string
    description?: string
    created: string
    category: string
  }
  
  export type SortOption = "name" | "amount" | "created"
  export type SortDirection = "asc" | "desc"
  
  