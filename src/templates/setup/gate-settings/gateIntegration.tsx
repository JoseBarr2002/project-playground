import { Card, CardHeader, CardTitle, CardContent } from "@components/ui/card"
import { Button } from "@components/ui/button"
import { ExternalLink } from "lucide-react"

export function GateIntegration() {
  return (
    <Card className="transition-all duration-200 hover:shadow-md">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Gate Integration</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">ESS offers cloud-based access control solutions.</p>

        <div className="space-y-4">
          <div>
            <h3 className="font-medium mb-2">Features include:</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Automatic assigning of access codes on online and manager rented units</li>
              <li>Assign/modify access codes from a mobile device</li>
              <li>No PC required – Offline Accessibility</li>
              <li>Automatic Lockouts and Lockout Removals in real time</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="font-medium mb-2">Your Cloud Node ID:</p>
            <p className="font-mono text-lg">1071TT6</p>
          </div>

          <div className="space-y-2">
            <Button variant="outline" className="w-full sm:w-auto" size="sm">
              View Access Codes Report
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="w-full sm:w-auto" size="sm">
              View Gate Activity Log
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="bg-blue-50 text-blue-800 p-4 rounded-lg">
            <h3 className="font-medium mb-2">Need assistance?</h3>
            <p>
              Call{" "}
              <a href="tel:435-656-1990" className="text-blue-600 hover:underline">
                435-656-1990
              </a>{" "}
              or email{" "}
              <a href="mailto:support@storageunitsoftware.com" className="text-blue-600 hover:underline">
                support@storageunitsoftware.com
              </a>
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

