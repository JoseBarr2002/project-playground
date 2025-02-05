import type React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@components/ui/card"

interface SectionCardProps {
  title: string
  description: string
  children: React.ReactNode
}

export function SectionCard({ title, description, children }: SectionCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  )
}

