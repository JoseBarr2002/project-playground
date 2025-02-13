import { Button } from "@components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@components/ui/select"
import { Input } from "@components/ui/input"
import { FileDown, FileIcon as FilePdf, Plus } from "lucide-react"

interface Customer {
  name: string
  phone: string
  cellPhone: string
  email: string
  balance: number
  rentals: string
}

const customers: Customer[] = [
  {
    name: "110 Mini Storage",
    phone: "",
    cellPhone: "(903) 780-8805",
    email: "110ministorage@gmail.com",
    balance: -9.99,
    rentals: "85, C11, T2",
  },
  {
    name: "110 Trophy Shop",
    phone: "",
    cellPhone: "",
    email: "",
    balance: 0,
    rentals: "",
  },
  // Add more sample data as needed
]

export default function CustomersTemplate() {
  return (
    <div className="container mx-auto py-6">
      <div className="flex flex-col gap-6">
        {/* Breadcrumb */}
        <div className="text-sm text-muted-foreground">
          <a href="/customers" className="hover:underline">
            Home boi
          </a>
          {" / "}
          <span>Customers</span>
        </div>

        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-semibold tracking-tight">Customers</h1>
          <div className="flex gap-2">
            <Button size="sm">
              <Plus className="w-4 h-4 mr-2" />
              New Customer
            </Button>
            <Button variant="outline" size="sm">
              <FileDown className="w-4 h-4 mr-2" />
              Export CSV
            </Button>
            <Button variant="outline" size="sm">
              <FilePdf className="w-4 h-4 mr-2" />
              PDF
            </Button>
          </div>
        </div>

        {/* Filters */}
        <div className="flex gap-4 items-end">
          <div className="flex-1">
            <Input placeholder="Name or Unit Number" />
          </div>
          <Select defaultValue="active">
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="25">
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Per Page" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="25">25 Per Page</SelectItem>
              <SelectItem value="50">50 Per Page</SelectItem>
              <SelectItem value="100">100 Per Page</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="name">
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="name">Sort by Name</SelectItem>
              <SelectItem value="balance">Sort by Balance</SelectItem>
              <SelectItem value="rentals">Sort by Rentals</SelectItem>
            </SelectContent>
          </Select>
          <Button>Search</Button>
        </div>

        {/* Table */}
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
              </TableRow>
            </TableHeader>
            <TableBody>
              {customers.map((customer, i) => (
                <TableRow key={i}>
                  <TableCell className="font-medium">{customer.name}</TableCell>
                  <TableCell>{customer.phone}</TableCell>
                  <TableCell>{customer.cellPhone}</TableCell>
                  <TableCell>{customer.email}</TableCell>
                  <TableCell className="text-right">${customer.balance.toFixed(2)}</TableCell>
                  <TableCell>{customer.rentals}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between">
          <div className="text-sm text-muted-foreground">Displaying customers 1 - 25 of 183 in total</div>
          <div className="flex gap-1">
            <Button variant="outline" size="sm">
              1
            </Button>
            <Button variant="ghost" size="sm">
              2
            </Button>
            <Button variant="ghost" size="sm">
              3
            </Button>
            <Button variant="ghost" size="sm">
              Next
            </Button>
            <Button variant="ghost" size="sm">
              Last
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

