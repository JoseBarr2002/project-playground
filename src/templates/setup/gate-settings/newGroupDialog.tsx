import { Button } from "@components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@components/ui/dialog"
import { Input } from "@components/ui/input"
import { Label } from "@components/ui/label"
import { Checkbox } from "@components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@components/ui/select"
import { useState } from "react"
import { formatTime } from "@lib/utils"

interface NewGroupDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onSave: (data: { name: string }) => void
}

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
const TIMES = Array.from({ length: 48 }, (_, i) => {
  const hour = Math.floor(i / 2)
  const minutes = i % 2 === 0 ? "00" : "30"
  return `${hour.toString().padStart(2, "0")}:${minutes}`
})

export function NewGroupDialog({ open, onOpenChange, onSave }: NewGroupDialogProps) {
  const [formData, setFormData] = useState({
    name: "",
    days: DAYS,
    startTime: "00:00",
    endTime: "23:30",
    gates: [] as string[],
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }
    if (formData.days.length === 0) {
      newErrors.days = "At least one day must be selected"
    }
    if (formData.gates.length === 0) {
      newErrors.gates = "At least one gate must be selected"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = () => {
    if (validateForm()) {
      onSave(formData)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>New Group</DialogTitle>
        </DialogHeader>

        <div className="grid gap-6 py-4">
          <div className="grid gap-2">
            <Label htmlFor="name">
              Name <span className="text-red-500">*</span>
            </Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => {
                setFormData((prev) => ({ ...prev, name: e.target.value }))
                if (errors.name) {
                  setErrors((prev) => ({ ...prev, name: "" }))
                }
              }}
              placeholder="Enter group name"
              className={errors.name ? "border-red-500" : ""}
            />
            {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
          </div>

          <div className="grid gap-2">
            <Label className="flex items-center gap-2">
              Access Days <span className="text-red-500">*</span>
            </Label>
            <div className="flex flex-wrap gap-3">
              {DAYS.map((day) => (
                <div key={day} className="flex items-center space-x-2">
                  <Checkbox
                    id={day}
                    checked={formData.days.includes(day)}
                    onCheckedChange={(checked) => {
                      const newDays = checked ? [...formData.days, day] : formData.days.filter((d) => d !== day)
                      setFormData((prev) => ({ ...prev, days: newDays }))
                      if (errors.days) {
                        setErrors((prev) => ({ ...prev, days: "" }))
                      }
                    }}
                    className={errors.days ? "border-red-500" : ""}
                  />
                  <Label
                    htmlFor={day}
                    className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {day}
                  </Label>
                </div>
              ))}
            </div>
            {errors.days && <p className="text-sm text-red-500">{errors.days}</p>}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label>From</Label>
              <Select
                value={formData.startTime}
                onValueChange={(value) => setFormData((prev) => ({ ...prev, startTime: value }))}
              >
                <SelectTrigger>
                  <SelectValue>{formatTime(formData.startTime)}</SelectValue>
                </SelectTrigger>
                <SelectContent>
                  {TIMES.map((time) => (
                    <SelectItem key={time} value={time}>
                      {formatTime(time)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-2">
              <Label>To</Label>
              <Select
                value={formData.endTime}
                onValueChange={(value) => setFormData((prev) => ({ ...prev, endTime: value }))}
              >
                <SelectTrigger>
                  <SelectValue>{formatTime(formData.endTime)}</SelectValue>
                </SelectTrigger>
                <SelectContent>
                  {TIMES.map((time) => (
                    <SelectItem key={time} value={time}>
                      {formatTime(time)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid gap-2">
            <Label className="flex items-center gap-2">
              Gates <span className="text-red-500">*</span>
            </Label>
            <div className="space-y-2">
              {["Keypad", "East Gate"].map((gate) => (
                <div key={gate} className="flex items-center space-x-2">
                  <Checkbox
                    id={gate}
                    checked={formData.gates.includes(gate)}
                    onCheckedChange={(checked) => {
                      const newGates = checked ? [...formData.gates, gate] : formData.gates.filter((g) => g !== gate)
                      setFormData((prev) => ({ ...prev, gates: newGates }))
                      if (errors.gates) {
                        setErrors((prev) => ({ ...prev, gates: "" }))
                      }
                    }}
                    className={errors.gates ? "border-red-500" : ""}
                  />
                  <Label
                    htmlFor={gate}
                    className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {gate}
                  </Label>
                </div>
              ))}
            </div>
            {errors.gates && <p className="text-sm text-red-500">{errors.gates}</p>}
          </div>
        </div>

        <div className="flex justify-end gap-2">
          <Button variant="outline" size="sm" className="w-full sm:w-auto" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button size="sm" className="w-full sm:w-auto" onClick={handleSubmit}>
            Save
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

