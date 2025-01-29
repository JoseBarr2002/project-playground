import { Percent, DollarSign } from "lucide-react"
import { Input } from "@components/ui/input"
import { Label } from "@components/ui/label"
import { Switch } from "@components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@components/ui/select"
import HelpTooltip from "./helpTooltip"
import type { FormData, FormErrors } from "./massEditRentalForm"
import type React from "react" // Import React

interface FormFieldsProps {
  formData: FormData
  setFormData: React.Dispatch<React.SetStateAction<FormData>>
  errors: FormErrors
  setErrors: React.Dispatch<React.SetStateAction<FormErrors>>
}

export default function FormFields({ formData, setFormData, errors, setErrors }: FormFieldsProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {/* Rent Updated At Least */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Label htmlFor="monthsAgo">Rent Updated At Least</Label>
          <HelpTooltip content="Filter rentals that haven't been updated in this many months" />
        </div>
        <div className="flex items-center gap-2">
          <div className="relative flex-1">
            <Input
              id="monthsAgo"
              type="number"
              placeholder="0"
              value={formData.monthsAgo}
              onChange={(e) => {
                setFormData((prev) => ({ ...prev, monthsAgo: e.target.value }))
                setErrors((prev) => ({ ...prev, monthsAgo: undefined }))
              }}
              className={errors.monthsAgo ? "border-red-500" : ""}
            />
            {errors.monthsAgo && (
              <span className="text-xs text-red-500 mt-1 absolute -bottom-5 left-0">{errors.monthsAgo}</span>
            )}
          </div>
          <span className="whitespace-nowrap text-sm">Month(s) Ago</span>
        </div>
      </div>

      {/* Unit Type */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Label htmlFor="unitType">Unit Type</Label>
          <HelpTooltip content="Select a specific type of unit to update" />
        </div>
        <Select
          value={formData.unitType}
          onValueChange={(value) => setFormData((prev) => ({ ...prev, unitType: value }))}
        >
          <SelectTrigger id="unitType">
            <SelectValue placeholder="Select unit type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Units</SelectItem>
            <SelectItem value="standard">Standard Units</SelectItem>
            <SelectItem value="climate">Climate Controlled Units</SelectItem>
            <SelectItem value="parking">Parking Units</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Increase Amount */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Label htmlFor="amount">Increase Monthly Rental Price By</Label>
          <HelpTooltip
            content={formData.isPercentage ? "Enter a percentage increase" : "Enter a fixed amount increase"}
          />
        </div>
        <div className="flex items-center gap-4">
          <div className="relative flex-1">
            <span className="absolute left-3 top-1/2 -translate-y-1/2">
              {formData.isPercentage ? <Percent className="w-4 h-4" /> : <DollarSign className="w-4 h-4" />}
            </span>
            <Input
              id="amount"
              type="number"
              step={formData.isPercentage ? "0.1" : "0.01"}
              className={`pl-8 ${errors.amount ? "border-red-500" : ""}`}
              placeholder={formData.isPercentage ? "0.0" : "0.00"}
              value={formData.amount}
              onChange={(e) => {
                setFormData((prev) => ({ ...prev, amount: e.target.value }))
                setErrors((prev) => ({ ...prev, amount: undefined }))
              }}
            />
            {errors.amount && (
              <span className="text-xs text-red-500 mt-1 absolute -bottom-5 left-0">{errors.amount}</span>
            )}
          </div>
          <div className="flex items-center gap-2">
            <Label htmlFor="isPercentage" className="text-sm">
              Percentage
            </Label>
            <Switch
              id="isPercentage"
              checked={formData.isPercentage}
              onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, isPercentage: checked }))}
            />
          </div>
        </div>
      </div>

      {/* Advanced Notice */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Label htmlFor="days">Advanced Notice</Label>
          <HelpTooltip content="Number of days notice before the price change takes effect" />
        </div>
        <div className="flex items-center gap-2">
          <div className="relative flex-1">
            <Input
              id="days"
              type="number"
              placeholder="0"
              value={formData.days}
              onChange={(e) => {
                setFormData((prev) => ({ ...prev, days: e.target.value }))
                setErrors((prev) => ({ ...prev, days: undefined }))
              }}
              className={errors.days ? "border-red-500" : ""}
            />
            {errors.days && <span className="text-xs text-red-500 mt-1 absolute -bottom-5 left-0">{errors.days}</span>}
          </div>
          <span className="whitespace-nowrap text-sm">Days</span>
        </div>
      </div>
    </div>
  )
}

