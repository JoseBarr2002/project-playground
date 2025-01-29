import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card"

interface FormSectionProps {
  title: string
  children: React.ReactNode
  className?: string
}

export function FormSection({ title, children, className }: FormSectionProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent className={className}>{children}</CardContent>
    </Card>
  )
}

