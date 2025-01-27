import type { Customer } from "./ITempCustomer"
import { revalidatePath } from "next/cache"

export async function getCustomers({
  page,
  perPage,
  search,
  status,
  sort,
}: GetCustomersParams): Promise<{ customers: Customer[]; totalCustomers: number }> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  // This is where you would typically fetch data from a database
  // For this example, we'll use mock data
  const customers: Customer[] = [
    {
      id: "1",
      name: "110 Mini Storage",
      phone: "",
      cellPhone: "(903) 780-8805",
      email: "110ministorage@gmail.com",
      balance: -9.99,
      rentals: "85, C11, T2",
      status: "active",
    },
    // Add more mock customers here...
  ]

  const totalCustomers = customers.length

  return { customers, totalCustomers }
}

export async function getCustomer(id: string): Promise<Customer | null> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  // This is where you would typically fetch data from a database
  // For this example, we'll use mock data
  const customer: Customer | undefined = {
    id: "1",
    name: "110 Mini Storage",
    phone: "",
    cellPhone: "(903) 780-8805",
    email: "110ministorage@gmail.com",
    balance: -9.99,
    rentals: "85, C11, T2",
    status: "active",
  }

  return customer || null
}

export async function deleteCustomer(id: string): Promise<void> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // This is where you would typically delete the customer from your database
  console.log(`Deleting customer with id: ${id}`)

  // Revalidate the customers page to reflect the changes
  revalidatePath("/customers")
}

