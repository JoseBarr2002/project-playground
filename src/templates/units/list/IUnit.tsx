export type UnitStatus =
  | "Rented"
  | "Available"
  | "Moving Out"
  | "Lien"
  | "Auction"
  | "Late"
  | "Locked Out"
  | "Reserved (Marketplace)"
  | "Pending"
  | "Pre-Lien"
  | "Reserved"
  | "Unavailable"

export interface Unit {
  id: string
  status: UnitStatus
  unitType: string
  customer: string
  phone: string
  cellPhone: string
  email: string
  balance: string
}

export const UNIT_STATUSES: UnitStatus[] = [
  "Available",
  "Rented",
  "Moving Out",
  "Lien",
  "Auction",
  "Late",
  "Locked Out",
  "Reserved (Marketplace)",
  "Pending",
  "Pre-Lien",
  "Reserved",
  "Unavailable",
]

