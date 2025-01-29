import { Checkbox } from "@components/ui/checkbox"
import type { ToggleFieldProps } from "./IFieldForm"

export function ToggleField({ fieldId, type, checked, onToggle, disabled }: ToggleFieldProps) {
  return <Checkbox checked={checked} onCheckedChange={() => onToggle(fieldId, type)} disabled={disabled} />
}

