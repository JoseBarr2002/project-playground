import { useState } from "react"
import { Card, CardContent } from "@components/ui/card"
import { Button } from "@components/ui/button"
import { Input } from "@components/ui/input"
import { Lock, Search, LockOpen } from "lucide-react"
import { useToast } from "@hooks/use-toast"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@components/ui/alert-dialog"

interface Gate {
  id: string
  name: string
  accessName: string
  isLocked: boolean
  isOnline: boolean
}

export function GateAccessControl() {
  const { toast } = useToast()
  const [gates, setGates] = useState<Gate[]>([
    {
      id: "1",
      name: "Keypad",
      accessName: "Main Gate",
      isLocked: true,
      isOnline: true,
    },
    {
      id: "2",
      name: "East Gate",
      accessName: "East",
      isLocked: true,
      isOnline: false,
    },
  ])
  const [search, setSearch] = useState("")

  const filteredGates = gates.filter(
    (gate) =>
      gate.name.toLowerCase().includes(search.toLowerCase()) ||
      gate.accessName.toLowerCase().includes(search.toLowerCase()),
  )

  const handleGateAction = async (gateId: string, action: "open" | "close") => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setGates((prev) =>
        prev.map((gate) => {
          if (gate.id === gateId) {
            return { ...gate, isLocked: action === "close" }
          }
          return gate
        }),
      )

      toast({
        title: "Success",
        description: `Gate ${action === "open" ? "opened" : "closed"} successfully`,
      })
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to control gate. Please try again.",
      })
    }
  }

  return (
    <Card className="transition-all duration-200 hover:shadow-md pt-4">
      <CardContent>
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-600">
              Active customers with a recognized phone number can open the gate by texting "open" to{" "}
              <a href="tel:9033670400" className="text-blue-500 hover:underline">
                (903) 367-0400
              </a>
            </p>
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search gates..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9"
              />
            </div>
          </div>

          <div className="bg-white rounded-lg border shadow-sm overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b">
                  <th className="text-left p-4 text-sm font-medium text-gray-600">Status</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-600">Gate</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-600">Access Name</th>
                  <th className="text-right p-4 text-sm font-medium text-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredGates.map((gate) => (
                  <tr key={gate.id} className="border-b last:border-0 hover:bg-gray-50 transition-colors">
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${gate.isOnline ? "bg-green-500" : "bg-gray-300"}`} />
                        <span className="text-sm text-gray-600">{gate.isOnline ? "Online" : "Offline"}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        {gate.name}
                        {gate.isLocked ? (
                          <Lock className="h-4 w-4 text-gray-500" />
                        ) : (
                          <LockOpen className="h-4 w-4 text-green-500" />
                        )}
                      </div>
                    </td>
                    <td className="p-4">{gate.accessName}</td>
                    <td className="p-4 text-right space-x-2">
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button size="sm" variant={gate.isLocked ? "default" : "outline"} disabled={!gate.isOnline}>
                            {gate.isLocked ? "Open" : "Close"}
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Confirm Gate {gate.isLocked ? "Opening" : "Closing"}</AlertDialogTitle>
                            <AlertDialogDescription>
                              Are you sure you want to {gate.isLocked ? "open" : "close"} {gate.name}? This action will
                              affect all users with access to this gate.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel className="w-full sm:w-auto text-sm font-medium px-4">
                              Cancel
                            </AlertDialogCancel>
                            <AlertDialogAction
                              className="w-full sm:w-auto text-sm font-medium px-2 sm:px-3 md:px-4 lg:px-6"
                              onClick={() => handleGateAction(gate.id, gate.isLocked ? "open" : "close")}
                            >
                              Continue
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-600">
            The selected primary gate can be accessed by texting "open" to the Text-to-Open number. All other gates
            require the Access Name to be specified (e.g. "open entry").
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

