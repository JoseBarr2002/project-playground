import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@components/ui/alert"
import { InfoIcon, Printer } from "lucide-react"

export default function PrintInstructions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Printer className="h-5 w-5" />
          Printing Instructions
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-sm">
        <Alert>
          <InfoIcon className="h-4 w-4" />
          <AlertTitle>Important Print Settings</AlertTitle>
          <AlertDescription>
            Set page scaling to &quot;None&quot; in your print dialog. For Google Chrome users, uncheck &quot;fit to
            page&quot; option.
          </AlertDescription>
        </Alert>
        <p>Labels should be printed on standard-size address label sheets.</p>
      </CardContent>
    </Card>
  )
}

