export interface UnitType {
    id: string
    name: string
    dimensions: {
      length: number
      width: number
      height?: number
    }
    description: string
    price: number
    imageUrl: string
    status: "available" | "occupied"
    agreement?: string
    reservationPrice?: number
    setupFee?: number
    deposit?: number
    rentTaxRate?: number
    setupTaxRate?: number
  }
  
  export interface PricingPlan {
    id: string
    unitTypeId: string
    billingCycle: number
    discountPercentage: number
    overridePrice?: number
    managerOnly: boolean
  }
  
  