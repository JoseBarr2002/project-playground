import type { Fee} from "./IFee"

// Initial fees data
const initialFees: Fee[] = [
    { id: "1", name: "Rent", amount: 1.0, created: "6/25/2020 by System", category: "Administrative" },
    { id: "2", name: "Balance Forward", amount: 1.0, created: "6/25/2020 by System", category: "Administrative" },
    {
      id: "3",
      name: "Lock out",
      amount: 5.0,
      description: "Lock out",
      created: "9/18/2020 by System",
      category: "Security",
    },
    {
      id: "4",
      name: "Credit Card Declined Fee",
      amount: 5.0,
      description: "Credit Card Declined",
      created: "2/7/2021 by System",
      category: "Administrative",
    },
    {
      id: "5",
      name: "CERTIFIED MAIL FEE FOR DELINQUENT UNITS",
      amount: 6.95,
      created: "10/27/2020 by System",
      category: "Administrative",
    },
    { id: "6", name: "Late fee", amount: 10.0, created: "9/12/2020 by System", category: "Late Fees" },
    { id: "7", name: "20 Days Late Fee", amount: 10.0, created: "10/20/2020 by System", category: "Late Fees" },
    {
      id: "8",
      name: "Clean out trash from unit that was illegally dumped in",
      amount: 25.0,
      created: "9/30/2021 by System",
      category: "Maintenance",
    },
    { id: "9", name: "cut lock", amount: 25.0, created: "4/9/2024 by 110ministorage@gmail.com", category: "Security" },
    {
      id: "10",
      name: "CREDIT CARD CHARGE BACK FEE",
      amount: 35.0,
      description: "JIMMY FRENCH 1-1-2021",
      created: "2/22/2021 by System",
      category: "Administrative",
    },
    {
      id: "11",
      name: "CREDIT CARD CHARGEBACK RECAPTURE RENT",
      amount: 50.0,
      description: "JIMMY FRENCH 1-1-2021",
      created: "2/22/2021 by System",
      category: "Administrative",
    },
  ]

export default initialFees