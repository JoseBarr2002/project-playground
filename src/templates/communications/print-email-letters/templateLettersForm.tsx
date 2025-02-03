import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import type * as z from "zod"
import { Button } from "@components/ui/button"
import { toast } from "@hooks/use-toast"
import { CustomerSelectionCard } from "./selectionCard"
import { DeliveryOptionsCard } from "./deliveryOptionsCard"
import { CustomerListCard } from "./listCard"
import { formSchema } from "./utils/schema"

export function TemplateLettersForm() {
  const [selectedCustomers, setSelectedCustomers] = useState<string[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      status: "active",
      template: "lockout",
      contactMethod: "email",
      printFormat: "letter",
      includeHeader: false,
      selectedCustomers: [],
    },
  })

  const handleSubmit = (data: z.infer<typeof formSchema>) => {
    if (selectedCustomers.length === 0) {
      toast({
        title: "No customers selected",
        description: "Please select at least one customer to send the template letter.",
        variant: "destructive",
      })
      return
    }

    // Here you would typically send this data to your backend
    console.log("Form submitted", { ...data, selectedCustomers })
    toast({
      title: "Template letters generated",
      description: `Letters generated for ${selectedCustomers.length} customers.`,
    })
  }

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
      <div className="grid gap-6 lg:grid-cols-2">
        <CustomerSelectionCard
          selectedCustomers={selectedCustomers}
          filterStatus={filterStatus}
          setFilterStatus={setFilterStatus}
          form={form}
        />
        <DeliveryOptionsCard form={form} />
      </div>

      <CustomerListCard
        selectedCustomers={selectedCustomers}
        setSelectedCustomers={setSelectedCustomers}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filterStatus={filterStatus}
      />

      <div className="flex justify-end gap-4">
        <Button size="sm" style={{ backgroundColor: "#000", color: "#fff" }} type="button" variant="outline" onClick={() => form.reset()}>
          Reset
        </Button>
        <Button size="sm" style={{ backgroundColor: "#000", color: "#fff" }} type="submit" className="gap-2">
          Generate Letters
        </Button>
      </div>
    </form>
  )
}

