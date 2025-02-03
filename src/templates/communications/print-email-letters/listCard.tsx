import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@components/ui/table"
import { Checkbox } from "@components/ui/checkbox"
import { Badge } from "@components/ui/badge"
import { Input } from "@components/ui/input"
import { Search } from "lucide-react"
import { customers } from "./utils/data"
import type { Customer } from "./utils/types"

interface CustomerListCardProps {
  selectedCustomers: string[]
  setSelectedCustomers: (customers: string[]) => void
  searchTerm: string
  setSearchTerm: (term: string) => void
  filterStatus: string
}

export function CustomerListCard({
  selectedCustomers,
  setSelectedCustomers,
  searchTerm,
  setSearchTerm,
  filterStatus,
}: CustomerListCardProps) {
  const [filteredCustomers, setFilteredCustomers] = useState<Customer[]>(customers)

  useEffect(() => {
    const filtered = customers.filter(
      (customer) =>
        (filterStatus === "all" || customer.status === filterStatus) &&
        (customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
          customer.unit.toLowerCase().includes(searchTerm.toLowerCase())),
    )
    setFilteredCustomers(filtered)
  }, [searchTerm, filterStatus])

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedCustomers(filteredCustomers.map((c) => c.id))
    } else {
      setSelectedCustomers([])
    }
  }

  const handleSelectCustomer = (customerId: string, checked: boolean) => {
    if (checked) {
      setSelectedCustomers((prev) => [...prev, customerId])
    } else {
      setSelectedCustomers((prev) => prev.filter((id) => id !== customerId))
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Customer List</CardTitle>
        <CardDescription>Select customers to receive the template letter</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4 flex items-center">
          <Search className="h-4 w-4 mr-2 text-muted-foreground" />
          <Input
            placeholder="Search customers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-sm"
          />
        </div>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[50px]">
                  <Checkbox
                    checked={selectedCustomers.length === filteredCustomers.length}
                    onCheckedChange={handleSelectAll}
                  />
                </TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Unit</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredCustomers.map((customer) => (
                <TableRow key={customer.id}>
                  <TableCell>
                    <Checkbox
                      checked={selectedCustomers.includes(customer.id)}
                      onCheckedChange={(checked) => handleSelectCustomer(customer.id, checked)}
                    />
                  </TableCell>
                  <TableCell className="font-medium">{customer.name}</TableCell>
                  <TableCell>{customer.unit}</TableCell>
                  <TableCell>
                    <Badge variant={customer.status === "active" ? "default" : "secondary"}>{customer.status}</Badge>
                  </TableCell>
                  <TableCell>{customer.email}</TableCell>
                  <TableCell>{customer.phone}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}

