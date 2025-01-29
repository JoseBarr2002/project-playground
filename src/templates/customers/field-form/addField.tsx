import { useState } from "react"
import { Input } from "@components/ui/input"
import { Button } from "@components/ui/button"
import type { AddFieldProps } from "./IFieldForm"

export function AddField({ onAddField, disabled }: AddFieldProps) {
  const [newFieldName, setNewFieldName] = useState("")

  const handleAddField = async () => {
    if (newFieldName.trim()) {
      await onAddField(newFieldName)
      setNewFieldName("")
    }
  }

  return (
    <div className="flex gap-4">
      <Input
        placeholder="Enter field name"
        className="max-w-sm"
        value={newFieldName}
        onChange={(e) => setNewFieldName(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleAddField()}
        disabled={disabled}
      />
      <Button size="sm" onClick={handleAddField} disabled={disabled || !newFieldName.trim()}>
        Add Field
      </Button>
    </div>
  )
}

