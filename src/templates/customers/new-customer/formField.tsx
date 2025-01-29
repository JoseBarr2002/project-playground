import { Label } from "@components/ui/label"
import type React from "react"

interface FormFieldProps {
  label: string
  children: React.ReactNode
  className?: string
}

export function FormField({ label, children, className }: FormFieldProps) {
  return (
    <div className={`space-y-2 ${className}`}>
      <Label>{label}</Label>
      {children}
    </div>
  )
}

