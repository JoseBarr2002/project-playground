import type React from "react"
import { CardDescription, CardHeader, CardTitle } from "@components/ui/card"

interface SettingsSectionProps {
  title: string
  description: string
  children: React.ReactNode
}

export function SettingsSection({ title, description, children }: SettingsSectionProps) {
  return (
    <section>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <div className="px-6">{children}</div>
    </section>
  )
}

