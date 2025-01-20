import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@components/ui/tabs"
import { MapPin, CreditCard } from "lucide-react"
import PhysicalAddress from "./physicalAddress"
import BillingAddress from "./billingAddress"

export default function AddressTabs() {
  const [sameBillingAddress, setSameBillingAddress] = useState(true)

  return (
    <Tabs defaultValue="physical" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="physical" className="flex items-center justify-center">
          <MapPin className="mr-2 h-4 w-4" />
          Physical Address
        </TabsTrigger>
        <TabsTrigger value="billing" className="flex items-center justify-center">
          <CreditCard className="mr-2 h-4 w-4" />
          Billing Address
        </TabsTrigger>
      </TabsList>
      <TabsContent value="physical">
        <PhysicalAddress />
      </TabsContent>
      <TabsContent value="billing">
        <BillingAddress sameBillingAddress={sameBillingAddress} setSameBillingAddress={setSameBillingAddress} />
      </TabsContent>
    </Tabs>
  )
}

