import type { Customer } from "./types"

export const customers: Customer[] = [
  {
    id: "1",
    name: "110 Mini Storage",
    unit: "85 C11 T2",
    status: "active",
    lockedOut: false,
    email: "110ministorage@gmail.com",
    phone: "(903) 780-8805",
  },
  {
    id: "2",
    name: "ABRAHAM EASTMAN",
    unit: "P7",
    status: "inactive",
    lockedOut: true,
    email: "hobbytonrustyfire@yahoo.com",
    phone: "(903) 830-1415",
  },
  {
    id: "3",
    name: "Amber L. Nettles",
    unit: "R28",
    status: "active",
    lockedOut: false,
    email: "ambernettles1975@gmail.com",
    phone: "(903) 216-3279",
  },
]

