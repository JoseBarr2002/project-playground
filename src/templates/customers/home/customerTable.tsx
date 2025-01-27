import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@components/ui/table"
import type { Customer } from "@templates/customers/home/ITempCustomer"
import { Link } from "expo-router"
import { Badge } from "@components/ui/badge"

interface CustomersTableProps {
  customers: Customer[]
}

export function CustomersTable({ customers }: CustomersTableProps) {
  return (
    <div className="border rounded-lg">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Cell Phone</TableHead>
            <TableHead>Email</TableHead>
            <TableHead className="text-right">Balance</TableHead>
            <TableHead>Rentals</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {customers.map((customer) => (
            <TableRow key={customer.id} className="group">
              <TableCell className="font-medium">
                <Link href={`/customers/${customer.id}`} className="hover:underline group-hover:text-primary">
                  {customer.name}
                </Link>
              </TableCell>
              <TableCell>{customer.phone}</TableCell>
              <TableCell>{customer.cellPhone}</TableCell>
              <TableCell>{customer.email}</TableCell>
              <TableCell className="text-right">${customer.balance.toFixed(2)}</TableCell>
              <TableCell>{customer.rentals}</TableCell>
              <TableCell>
                <Badge variant={customer.status === "active" ? "default" : "secondary"}>{customer.status}</Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

