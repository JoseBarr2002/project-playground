import { useState } from "react"
import { Button } from "@components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@components/ui/table"
import { Badge } from "@components/ui/badge"
import { PlusCircle } from "lucide-react"

export function RateManagementBatches() {
  const [batches, setBatches] = useState([
    { id: 1, name: "January 2023", status: "Completed", affectedUnits: 150, revenue: 5000 },
    { id: 2, name: "February 2023", status: "In Progress", affectedUnits: 100, revenue: 3500 },
    { id: 3, name: "March 2023", status: "Scheduled", affectedUnits: 200, revenue: 7000 },
  ])

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Rate Management Batches</CardTitle>
        <Button className="w-full sm:w-auto" size="sm">
          <PlusCircle className="mr-2 h-4 w-4" /> Create New Batch
        </Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Batch Name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Affected Units</TableHead>
              <TableHead>Projected Revenue</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {batches.map((batch) => (
              <TableRow key={batch.id}>
                <TableCell>{batch.name}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      batch.status === "Completed"
                        ? "default"
                        : batch.status === "In Progress"
                          ? "secondary"
                          : "outline"
                    }
                  >
                    {batch.status}
                  </Badge>
                </TableCell>
                <TableCell>{batch.affectedUnits}</TableCell>
                <TableCell>${batch.revenue.toLocaleString()}</TableCell>
                <TableCell>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

