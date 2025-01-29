export interface FormField {
    id: string
    name: string
    required: boolean
    unique: boolean
    isCustom?: boolean
  }
  
  export interface ToggleFieldProps {
    fieldId: string
    type: "required" | "unique"
    checked: boolean
    onToggle: (fieldId: string, type: "required" | "unique") => Promise<void>
    disabled: boolean
  }
  
  export interface DeleteFieldProps {
    fieldId: string
    fieldName: string
    onDelete: (fieldId: string) => Promise<void>
    disabled: boolean
  }
  
  export interface AddFieldProps {
    onAddField: (fieldName: string) => Promise<void>
    disabled: boolean
  }
  
  export interface EditFieldProps {
    fieldId: string
    fieldName: string
    onEdit: (fieldId: string, newName: string) => Promise<void>
    disabled: boolean
  }
  
  