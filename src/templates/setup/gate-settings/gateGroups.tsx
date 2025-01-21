import { Card, CardContent } from "@components/ui/card"
import { Button } from "@components/ui/button"
import { Input } from "@components/ui/input"
import { useState } from "react"
import { NewGroupDialog } from "./newGroupDialog"
import { Search, Edit, Users, Package } from "lucide-react"
import { useToast } from "@hooks/use-toast"

interface GateGroup {
  id: string
  name: string
  membersCount: number
  unitsCount: number
}

export function GateGroups() {
  const { toast } = useToast()
  const [groups, setGroups] = useState<GateGroup[]>([{ id: "1", name: "Renters", membersCount: 150, unitsCount: 200 }])
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [search, setSearch] = useState("")

  const filteredGroups = groups.filter((group) => group.name.toLowerCase().includes(search.toLowerCase()))

  const handleSaveGroup = (newGroup: { name: string }) => {
    setGroups((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        name: newGroup.name,
        membersCount: 0,
        unitsCount: 0,
      },
    ])
    setIsDialogOpen(false)
    toast({
      title: "Success",
      description: "Gate group created successfully",
    })
  }

  return (
    <Card className="transition-all duration-200 hover:shadow-md pt-4">
      <CardContent>
        <div className="flex justify-between items-center mb-4">
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search groups..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9"
            />
          </div>
          <Button size="sm" className="w-full sm:w-auto" onClick={() => setIsDialogOpen(true)}>
            New Group
          </Button>
        </div>

        <div className="space-y-4">
          <div className="bg-white rounded-lg border shadow-sm overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b">
                  <th className="text-left p-4 text-sm font-medium text-gray-600">Name</th>
                  <th className="text-center p-4 text-sm font-medium text-gray-600">Members</th>
                  <th className="text-center p-4 text-sm font-medium text-gray-600">Units</th>
                  <th className="text-right p-4 text-sm font-medium text-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredGroups.map((group) => (
                  <tr key={group.id} className="border-b last:border-0 hover:bg-gray-50 transition-colors">
                    <td className="p-4 font-medium">{group.name}</td>
                    <td className="p-4 text-center text-gray-600">{group.membersCount}</td>
                    <td className="p-4 text-center text-gray-600">{group.unitsCount}</td>
                    <td className="p-4 text-right">
                      <div className="flex justify-end gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-orange-600 hover:text-orange-700 hover:bg-orange-50"
                        >
                          <Edit className="h-4 w-4 mr-1" />
                          Edit
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                        >
                          <Package className="h-4 w-4 mr-1" />
                          Units
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                        >
                          <Users className="h-4 w-4 mr-1" />
                          Customers
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
                {filteredGroups.length === 0 && (
                  <tr>
                    <td colSpan={4} className="p-8 text-center text-gray-500">
                      No groups found matching your search.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        <NewGroupDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} onSave={handleSaveGroup} />
      </CardContent>
    </Card>
  )
}

