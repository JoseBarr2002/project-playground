import { useDroppable } from "@dnd-kit/core"
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable"
import { NavigationItem } from "./navItem"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@components/ui/card"

interface NavigationColumnProps {
  id: string
  title: string
  description: string
  items: {
    id: string
    title: string
    icon?: string
  }[]
}

export function NavigationColumn({ id, title, description, items }: NavigationColumnProps) {
  const { setNodeRef } = useDroppable({ id })

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <SortableContext items={items} strategy={verticalListSortingStrategy}>
          <div ref={setNodeRef} className="min-h-[200px] space-y-2">
            {items.map((item) => (
              <NavigationItem key={item.id} id={item.id} title={item.title} icon={item.icon} />
            ))}
            {items.length === 0 && (
              <div className="flex h-[200px] items-center justify-center rounded-lg border-2 border-dashed text-sm text-gray-400">
                Drop items here
              </div>
            )}
          </div>
        </SortableContext>
      </CardContent>
    </Card>
  )
}

