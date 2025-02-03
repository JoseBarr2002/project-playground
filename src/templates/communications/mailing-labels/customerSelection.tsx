import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card"
import { Button } from "@components/ui/button"
import { Input } from "@components/ui/input"
import { Checkbox } from "@components/ui/checkbox"
import { Search, Printer } from "lucide-react"

const customers = [
  "110 Trophy Shop",
  "ABRAHAM EASTMAN",
  "ALEXANDRI OBREGON",
  "Amanda S Simmons",
  "ANGELA PRICE",
  "Antonio j Fletcher",
  "Ashton M Garrison",
  "Atmos Energy ATTN cc4239",
  "Blake Helm",
  "Bobby Johnson",
  "Buddy Attaway",
  "Cannius Caldwell",
  "Cara McDaniel",
  "Carrie Catalano vince",
  "Carter Ryan Collins",
  "CATHY FREEMAN",
  "CHADWICK ADAMS",
  "Charles Swift",
  "Chelsie B Blake",
  "Clay Joel, Barron",
  "Clayton A Poole",
  "Clinton McCaa",
  "COLIN FITE",
  "Connie K. Wills",
  "Cory maxwell",
  "Cynthia D Ferguson",
]

export default function CustomerSelection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Select Customers</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <div className="flex gap-4 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search customers..." className="pl-8" />
            </div>
            <Button size="sm">
              <Printer className="mr-2 h-4 w-4" />
              Print Selected
            </Button>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Checkbox id="select-all" />
            <label htmlFor="select-all">Select All</label>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {customers.map((customer) => (
            <div key={customer} className="flex items-center space-x-2 p-2 rounded hover:bg-accent">
              <Checkbox id={customer} />
              <label
                htmlFor={customer}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {customer}
              </label>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

