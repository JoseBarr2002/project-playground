import { Label } from "@components/ui/label"
import { Input } from "@components/ui/input"
import { Info } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@components/ui/tooltip"

interface FormFieldProps {
  id: string
  label: string
  type: string
  placeholder: string
  tooltip: string
}

export function FormField({ id, label, type, placeholder, tooltip }: FormFieldProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Label htmlFor={id} className="text-base font-medium">
          {label}
        </Label>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Info className="h-4 w-4 text-gray-400" />
            </TooltipTrigger>
            <TooltipContent>
              <p className="w-[200px]">{tooltip}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <Input id={id} type={type} placeholder={placeholder} className="w-full" />
    </div>
  )
}

