import { Card, CardContent } from "@components/ui/card"
import { CreditCard, LifeBuoy, Info } from "lucide-react"

export default function SupportTab() {
  return (
    <Card>
      <CardContent className="p-6 space-y-4">
        <h2 className="text-xl font-semibold">Support & Questions</h2>
        <p>GOAT Storage Payments is provided and handled by the same support team you already know and trust.</p>
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <CreditCard className="h-4 w-4" />
            <span className="font-medium">Phone:</span>
            <a href="tel:903-000-1111" className="text-blue-600 hover:underline">
              903-000-1111
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <LifeBuoy className="h-4 w-4" />
            <span className="font-medium">Email:</span>
            <a href="mailto:support@storagesoftware.com" className="text-blue-600 hover:underline">
              support@storagesoftware.com
            </a>
          </div>
        </div>
        <div className="mt-4 p-4 bg-muted/50 rounded-lg">
          <h3 className="font-medium mb-2 flex items-center">
            <Info className="h-4 w-4 mr-2" />
            Support Hours
          </h3>
          <p>Monday - Friday: 9:00 AM - 5:00 PM EST</p>
          <p>Saturday: 10:00 AM - 2:00 PM EST</p>
          <p>Sunday: Closed</p>
        </div>
      </CardContent>
    </Card>
  )
}

