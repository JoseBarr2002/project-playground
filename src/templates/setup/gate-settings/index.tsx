"use client"

import { useState } from "react"
import { Breadcrumb } from "./breadcrumb"
import { GateIntegration } from "./gateIntegration"
import { GateAccessControl } from "./gateAccessControl"
import { GateGroups } from "./gateGroups"
import { Toaster } from "@components/ui/toaster"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@components/ui/tabs"

export default function GateSettingsTemplate() {
  const [activeTab, setActiveTab] = useState("integration")

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto p-6 max-w-7xl">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-[#c26d53] mb-2">Gate Settings</h1>
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Setup", href: "/setup" },
                { label: "Gate Settings", href: "/gate-settings" },
              ]}
            />
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="integration">Integration</TabsTrigger>
            <TabsTrigger value="access-control">Access Control</TabsTrigger>
            <TabsTrigger value="groups">Groups</TabsTrigger>
          </TabsList>
          <TabsContent value="integration" className="space-y-4">
            <GateIntegration />
          </TabsContent>
          <TabsContent value="access-control" className="space-y-4">
            <GateAccessControl />
          </TabsContent>
          <TabsContent value="groups" className="space-y-4">
            <GateGroups />
          </TabsContent>
        </Tabs>
      </div>
      <Toaster />
    </div>
  )
}

