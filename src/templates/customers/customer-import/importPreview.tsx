import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@components/ui/table"
import { Button } from "@components/ui/button"
import { X } from "lucide-react"

interface ImportPreviewProps {
  data: string[][]
}

export function ImportPreview({ data }: ImportPreviewProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Preview ({data.length} rows)</span>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => {
              /* Clear data logic */
            }}
          >
            <X className="h-4 w-4" />
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Address</TableHead>
                <TableHead>City</TableHead>
                <TableHead>State</TableHead>
                <TableHead>Email</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.slice(0, 5).map((row, i) => (
                <TableRow key={i}>
                  <TableCell>{row[0]}</TableCell>
                  <TableCell>{row[1]}</TableCell>
                  <TableCell>{row[2]}</TableCell>
                  <TableCell>{row[3]}</TableCell>
                  <TableCell>{row[15]}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        {data.length > 5 && <p className="text-sm text-muted-foreground mt-2">Showing first 5 of {data.length} rows</p>}
      </CardContent>
    </Card>
  )
}

