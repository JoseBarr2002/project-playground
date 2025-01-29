import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@components/ui/table"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@components/ui/tooltip"
import { useToast } from "@hooks/use-toast"
import { Toaster } from "@components/ui/toaster"
import { Info, Loader2 } from "lucide-react"
import { ToggleField } from "./toggleField"
import { AddField } from "./addField"
import { EditField } from "./editField"
import type { FormField } from "./IFieldForm"

export default function FormFieldTemplate() {
  const { toast } = useToast()
  const [isSaving, setIsSaving] = useState(false)
  const [formFields, setFormFields] = useState<FormField[]>([
    { id: "1", name: "First name", required: true, unique: false },
    { id: "2", name: "Last name", required: true, unique: false },
    { id: "3", name: "Email address", required: true, unique: true },
    { id: "4", name: "Phone number", required: false, unique: false },
    { id: "5", name: "Company name", required: false, unique: false },
    { id: "6", name: "Job title", required: false, unique: false },
    { id: "7", name: "Address", required: false, unique: false },
    { id: "8", name: "City", required: false, unique: false },
    { id: "9", name: "State/Province", required: false, unique: false },
    { id: "10", name: "ZIP/Postal code", required: false, unique: false },
    { id: "11", name: "Country", required: false, unique: false },
  ])

  const handleToggle = async (fieldId: string, type: "required" | "unique") => {
    setFormFields((fields) =>
      fields.map((field) => {
        if (field.id === fieldId) {
          return { ...field, [type]: !field[type] }
        }
        return field
      }),
    )

    await simulateApiCall("Settings updated", "Your changes have been saved successfully.")
  }

  const handleAddField = async (newFieldName: string) => {
    if (formFields.some((field) => field.name.toLowerCase() === newFieldName.toLowerCase())) {
      toast({
        title: "Error",
        description: "A field with this name already exists.",
        variant: "destructive",
      })
      return
    }

    const newField: FormField = {
      id: Date.now().toString(),
      name: newFieldName,
      required: false,
      unique: false,
      isCustom: true,
    }

    setFormFields((prev) => [...prev, newField])

    await simulateApiCall("Field added", "The new field has been added successfully.")
  }

  const handleEditField = async (fieldId: string, newName: string) => {
    if (formFields.some((field) => field.id !== fieldId && field.name.toLowerCase() === newName.toLowerCase())) {
      toast({
        title: "Error",
        description: "A field with this name already exists.",
        variant: "destructive",
      })
      return
    }

    setFormFields((fields) =>
      fields.map((field) => {
        if (field.id === fieldId) {
          return { ...field, name: newName }
        }
        return field
      }),
    )

    await simulateApiCall("Field updated", "The field name has been updated successfully.")
  }

  const simulateApiCall = async (title: string, description: string) => {
    try {
      setIsSaving(true)
      await new Promise((resolve) => setTimeout(resolve, 500))
      toast({ title, description })
    } catch (error) {
      toast({
        title: "Error",
        description: "An error occurred. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <TooltipProvider>
      <Card className="w-full max-w-4xl">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Form Field Settings for Customers</span>
            {isSaving && (
              <div className="flex items-center text-sm text-muted-foreground">
                <Loader2 className="h-4 w-4 animate-spin mr-2" />
                Saving changes...
              </div>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[300px]">Field name</TableHead>
                <TableHead>
                  <div className="flex items-center gap-2">
                    Required to enter
                    <Tooltip>
                      <TooltipTrigger>
                        <Info className="h-4 w-4 text-muted-foreground" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Users must fill out this field to submit the form</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </TableHead>
                <TableHead>
                  <div className="flex items-center gap-2">
                    Must be unique
                    <Tooltip>
                      <TooltipTrigger>
                        <Info className="h-4 w-4 text-muted-foreground" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Each submission must have a unique value for this field</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {formFields.map((field) => (
                <TableRow key={field.id}>
                  <TableCell className="font-medium">
                    <EditField fieldId={field.id} fieldName={field.name} onEdit={handleEditField} disabled={isSaving} />
                    {field.isCustom && <span className="ml-2 text-xs text-muted-foreground">(Custom)</span>}
                  </TableCell>
                  <TableCell>
                    <ToggleField
                      fieldId={field.id}
                      type="required"
                      checked={field.required}
                      onToggle={handleToggle}
                      disabled={isSaving}
                    />
                  </TableCell>
                  <TableCell>
                    <ToggleField
                      fieldId={field.id}
                      type="unique"
                      checked={field.unique}
                      onToggle={handleToggle}
                      disabled={isSaving}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <div className="mt-8 border-t pt-6">
            <h3 className="text-sm font-semibold mb-4">Create Custom Field</h3>
            <AddField onAddField={handleAddField} disabled={isSaving} />
          </div>
        </CardContent>
      </Card>
      <Toaster />
    </TooltipProvider>
  )
}

