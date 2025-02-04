import { useState } from "react"
import { DndContext, type DragEndEvent, DragOverlay, type DragStartEvent, closestCenter } from "@dnd-kit/core"
import { NavigationColumn } from "./navColumn"
import { NavigationItem } from "./navItem"
import { Button } from "@components/ui/button"
import { toast } from "@hooks/use-toast"

type MenuItem = {
  id: string
  title: string
  icon?: string
}

type Column = {
  id: string
  title: string
  description: string
  items: MenuItem[]
}

const initialColumns: Column[] = [
  {
    id: "main",
    title: "Main Menu",
    description: "These items appear in your primary navigation bar",
    items: [
      { id: "home", title: "Home", icon: "🏠" },
      { id: "map", title: "Map", icon: "🗺️" },
      { id: "contact", title: "Contact Us", icon: "📞" },
      { id: "units", title: "Available Units", icon: "📦" },
    ],
  },
  {
    id: "more",
    title: "More Dropdown",
    description: "Secondary items that appear in a dropdown menu",
    items: [],
  },
  {
    id: "hidden",
    title: "Hidden Items",
    description: "These items won't appear in any menu",
    items: [],
  },
]

export function NavigationManager() {
  const [columns, setColumns] = useState<Column[]>(initialColumns)
  const [activeId, setActiveId] = useState<string | null>(null)

  function handleDragStart(event: DragStartEvent) {
    setActiveId(event.active.id as string)
  }

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event

    if (!over) return

    const activeColumn = columns.find((col) => col.items.some((item) => item.id === active.id))
    const overColumn = columns.find((col) => col.id === over.id)

    if (!activeColumn || !overColumn) return

    if (over.id in columns.map((col) => col.id)) {
      const activeItem = activeColumn.items.find((item) => item.id === active.id)
      if (!activeItem) return

      setColumns(
        columns.map((col) => {
          if (col.id === activeColumn.id) {
            return {
              ...col,
              items: col.items.filter((item) => item.id !== active.id),
            }
          }
          if (col.id === overColumn.id) {
            return {
              ...col,
              items: [...col.items, activeItem],
            }
          }
          return col
        }),
      )
    }

    setActiveId(null)
  }

  const handleSave = () => {
    toast.promise(new Promise((resolve) => setTimeout(resolve, 1000)), {
      loading: "Saving navigation settings...",
      success: "Navigation menu updated successfully!",
      error: "Failed to save changes. Please try again.",
    })
  }

  const handleReset = () => {
    setColumns(initialColumns)
    toast.success("Navigation menu reset to default settings.")
  }

  const activeItem = activeId ? columns.flatMap((col) => col.items).find((item) => item.id === activeId) : null

  return (
    <div className="space-y-6">
      <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd} collisionDetection={closestCenter}>
        <div className="grid gap-8 md:grid-cols-3">
          {columns.map((column) => (
            <NavigationColumn
              key={column.id}
              id={column.id}
              title={column.title}
              description={column.description}
              items={column.items}
            />
          ))}
        </div>

        <DragOverlay>
          {activeId && activeItem ? (
            <NavigationItem id={activeId} title={activeItem.title} icon={activeItem.icon} />
          ) : null}
        </DragOverlay>
      </DndContext>

      <div className="flex items-center justify-between border-t pt-6">
        <p className="text-sm text-gray-500">Drag and drop items to reorganize your navigation menu</p>
        <div className="flex gap-3">
          {/* <Button size="sm" variant="outline" onClick={handleReset}> */}
          <Button size="sm" variant="outline">
            Reset to Default
          </Button>
          {/* <Button size="sm" onClick={handleSave} className="bg-blue-500 text-white hover:bg-blue-600"> */}
          <Button size="sm" className="bg-blue-500 text-white hover:bg-blue-600">
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  )
}

