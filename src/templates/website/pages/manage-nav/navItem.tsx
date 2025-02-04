import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import { GripVertical } from "lucide-react"

interface NavigationItemProps {
  id: string
  title: string
  icon?: string
}

export function NavigationItem({ id, title, icon }: NavigationItemProps) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`flex items-center gap-3 rounded-lg border bg-white p-3 shadow-sm transition-colors
        ${isDragging ? "ring-2 ring-blue-500" : "hover:bg-gray-50"}`}
      {...attributes}
    >
      <button
        className="cursor-grab touch-none text-gray-400 hover:text-gray-600 active:cursor-grabbing"
        {...listeners}
      >
        <GripVertical className="h-5 w-5" />
      </button>
      {icon && <span className="text-lg">{icon}</span>}
      <span className="font-medium">{title}</span>
    </div>
  )
}

