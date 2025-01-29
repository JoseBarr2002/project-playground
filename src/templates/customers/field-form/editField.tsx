import { useState } from "react"
import { Button } from "@components/ui/button"
import { Input } from "@components/ui/input"
import { Pencil, X, Check } from "lucide-react"
import type { EditFieldProps } from "./IFieldForm"

export function EditField({ fieldId, fieldName, onEdit, disabled }: EditFieldProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [editedName, setEditedName] = useState(fieldName)

  const handleEdit = async () => {
    if (editedName.trim() && editedName !== fieldName) {
      await onEdit(fieldId, editedName)
    }
    setIsEditing(false)
  }

  if (isEditing) {
    return (
      <div className="flex items-center gap-2">
        <Input
          value={editedName}
          onChange={(e) => setEditedName(e.target.value)}
          className="h-8 w-[200px]"
          disabled={disabled}
        />
        <Button
          variant="ghost"
          size="icon"
          onClick={handleEdit}
          disabled={disabled || !editedName.trim() || editedName === fieldName}
        >
          <Check className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => {
            setIsEditing(false)
            setEditedName(fieldName)
          }}
          disabled={disabled}
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
    )
  }

  return (
    <div className="flex items-center gap-2">
      <span>{fieldName}</span>
      <Button variant="ghost" size="icon" onClick={() => setIsEditing(true)} disabled={disabled}>
        <Pencil className="h-4 w-4" />
      </Button>
    </div>
  )
}

