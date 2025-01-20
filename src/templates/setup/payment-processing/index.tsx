"use client"

import { useState } from "react"
import { Card } from "@components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@components/ui/tabs"
import { Alert, AlertDescription } from "@components/ui/alert"
import { Check } from "lucide-react"
import SidebarNavigation from "./sidebarNavigation"
import PaymentMethodsTab from "./paymentMethodsTab"
import ScheduleTab from "./scheduleTab"
import SupportTab from "./supportTab"

export default function PaymentProcessingTemplate() {
  const [activeTab, setActiveTab] = useState("payment-methods")

  return (
    <div className="container mx-auto p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-semibold text-orange-600">GOAT Storage Payments</h1>
        <div className="text-sm text-muted-foreground">
          <span>Home</span> / <span>Setup</span> / <span>GOAT Storage Payments</span>
        </div>
      </div>

      <Alert className="mb-6 bg-green-50 border-green-200">
        <Check className="h-4 w-4 text-green-600" />
        <AlertDescription className="text-green-600">Your account is verified and active</AlertDescription>
      </Alert>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <Card className="lg:col-span-1 h-fit">
          <SidebarNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
        </Card>

        <div className="lg:col-span-3">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="payment-methods" id="payment-methods">
                Payment Methods
              </TabsTrigger>
              <TabsTrigger value="schedule" id="schedule">
                Schedule
              </TabsTrigger>
              <TabsTrigger value="support" id="support">
                Support
              </TabsTrigger>
            </TabsList>

            <TabsContent value="payment-methods" className="space-y-4">
              <PaymentMethodsTab />
            </TabsContent>

            <TabsContent value="schedule">
              <ScheduleTab />
            </TabsContent>

            <TabsContent value="support">
              <SupportTab />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

