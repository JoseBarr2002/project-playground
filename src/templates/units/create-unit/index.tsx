"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@components/ui/tabs"
import { Button } from "@components/ui/button"
import { Boxes } from "lucide-react"
import NewUnitForm from "./newUnitForm"
import MultipleUnitsForm from "./multipleUnitsForm"
import UnitTypeForm from "./unitTypeForm"
import { toast } from "@hooks/use-toast"

export default function CreateUnitTemplate() {
  const [isLoading, setIsLoading] = useState(false)

  const handleCreateUnit = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      toast({
        title: "Unit Created",
        description: "Your new unit has been successfully added to the system.",
      })
    }, 2000)
  }

  const handleCreateUnitType = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      toast({
        title: "Unit Type Created",
        description: "Your new unit type has been successfully added to the system.",
      })
    }, 2000)
  }

  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold text-primary">Unit Management</h1>
        <Button variant="outline" size="sm">
          <Boxes className="mr-2 h-4 w-4" />
          View All Units
        </Button>
      </div>

      <Tabs defaultValue="new-unit" className="space-y-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="new-unit">New Unit</TabsTrigger>
          <TabsTrigger value="multiple-units">Create Multiple Units</TabsTrigger>
          <TabsTrigger value="unit-type">New Unit Type</TabsTrigger>
        </TabsList>

        <TabsContent value="new-unit" className="space-y-4">
          <NewUnitForm isLoading={isLoading} onSubmit={handleCreateUnit} />
        </TabsContent>

        <TabsContent value="multiple-units" className="space-y-4">
          <MultipleUnitsForm isLoading={isLoading} onSubmit={handleCreateUnit} />
        </TabsContent>

        <TabsContent value="unit-type" className="space-y-4">
          <UnitTypeForm isLoading={isLoading} onSubmit={handleCreateUnitType} />
        </TabsContent>
      </Tabs>
    </div>
  )
}

