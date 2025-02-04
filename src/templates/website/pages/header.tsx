import { Plus, Settings2 } from "lucide-react"
import { Button } from "@components/ui/button"
import { router } from 'expo-router'

interface PageHeaderProps {
  title: string
}

export function PageHeader({ title }: PageHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-semibold">{title}</h1>
      </div>
      <div className="flex gap-2">
        <Button size="sm" variant="outline">
          <Settings2 className="mr-2 h-4 w-4" />
          Settings
        </Button>
        <Button size="sm" onClick={() => router.push('/website/pages/new-page')}>
          <Plus className="mr-2 h-4 w-4" />
          Add Page
        </Button>
      </div>
    </div>
  )
}

