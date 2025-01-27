import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card"
import { CheckCircle2 } from "lucide-react"

const fields = [
  { name: "Name", required: true },
  { name: "Address", required: true },
  { name: "City", required: true },
  { name: "State", required: true },
  { name: "Zipcode", required: true },
  { name: "Phone", required: false },
  { name: "Cell Phone", required: false },
  { name: "Drivers License Number", required: false },
  { name: "Drivers License State", required: false },
  { name: "Social Security Number", required: false },
  { name: "Employer Name", required: false },
  { name: "Employer Phone", required: false },
  { name: "Emergency Contact", required: false },
  { name: "Emergency Phone", required: false },
  { name: "Referred By", required: false },
  { name: "Email", required: false },
]

export function RequiredFields() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Required Fields</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {fields.map((field) => (
            <div key={field.name} className="flex items-center gap-2">
              <CheckCircle2 className={`h-4 w-4 ${field.required ? "text-primary" : "text-muted-foreground"}`} />
              <span className="text-sm">
                {field.name}
                {field.required && <span className="text-destructive ml-1">*</span>}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

