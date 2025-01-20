import { Card, CardContent } from "@components/ui/card"
import { Alert, AlertDescription } from "@components/ui/alert"
import { Button } from "@components/ui/button"
import { AlertCircle } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@components/ui/dialog"

export default function ScheduleTab() {
  return (
    <Card>
      <CardContent className="p-6 space-y-4">
        <h2 className="text-xl font-semibold">Payment Schedule</h2>
        <div className="space-y-4">
          <p>
            Transfers to your bank account happen daily on a rolling 2 business day schedule. ACH payments may take up
            to 9 business days to process and deposit.
          </p>
          <div className="bg-muted/50 p-4 rounded-lg">
            <h3 className="font-medium mb-2">Example Timeline</h3>
            <p>Monday transactions → Wednesday deposits</p>
            <p>Friday transactions → Tuesday deposits</p>
          </div>
          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              Bank account changes require a voided check or bank letter with account details for verification.
            </AlertDescription>
          </Alert>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Request Bank Account Change</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Request Bank Account Change</DialogTitle>
              <DialogDescription>
                To change your bank account, please contact our support team. They will guide you through the process
                and required documentation.
              </DialogDescription>
            </DialogHeader>
            <div className="flex justify-end">
              <Button onClick={() => document.getElementById("support")?.click()}>Contact Support</Button>
            </div>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  )
}

