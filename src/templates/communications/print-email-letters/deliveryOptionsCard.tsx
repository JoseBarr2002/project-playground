import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@components/ui/card"
import { Label } from "@components/ui/label"
import { RadioGroup, RadioGroupItem } from "@components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@components/ui/select"
import { Checkbox } from "@components/ui/checkbox"
import { Mail, Printer } from "lucide-react"
import type { UseFormReturn } from "react-hook-form"

interface DeliveryOptionsCardProps {
  form: UseFormReturn<any>
}

export function DeliveryOptionsCard({ form }: DeliveryOptionsCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Delivery Options</CardTitle>
        <CardDescription>Choose how you want to send the template letters</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <Label>Contact Method</Label>
          <RadioGroup defaultValue="email" className="grid grid-cols-2 gap-4" {...form.register("contactMethod")}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="email" id="email" />
              <Label htmlFor="email" className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Email
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="print" id="print" />
              <Label htmlFor="print" className="flex items-center gap-2">
                <Printer className="h-4 w-4" />
                Print
              </Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-4">
          <Label>Print Format</Label>
          <Select defaultValue="letter" {...form.register("printFormat")}>
            <SelectTrigger>
              <SelectValue placeholder="Select format" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="letter">Letter (#10 Envelope)</SelectItem>
              <SelectItem value="legal">Legal Size</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox id="template-header" {...form.register("includeHeader")} />
          <Label htmlFor="template-header">Include Template Title Header</Label>
        </div>
      </CardContent>
    </Card>
  )
}

