import type React from "react"

interface ContentCardProps {
  title: string
  children: React.ReactNode
}

export function ContentCard({ title, children }: ContentCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h3 className="font-semibold text-xl mb-4 text-gray-800">{title}</h3>
      {children}
    </div>
  )
}

