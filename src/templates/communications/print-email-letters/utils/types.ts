export interface Customer {
    id: string
    name: string
    unit: string
    status: "active" | "inactive"
    lockedOut: boolean
    auctionDate?: string
    email: string
    phone: string
  }
  
  