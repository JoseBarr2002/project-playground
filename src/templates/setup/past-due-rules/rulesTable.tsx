import { Button } from "@components/ui/button"
import { Switch } from "@components/ui/switch"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@components/ui/tooltip"
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
import { Pencil, Trash2, HelpCircle } from "lucide-react"

interface RulesTableProps {
  rules: Rule[]
  onEdit: (rule: Rule) => void
  onDelete: (id: string) => void
  onToggle: (id: string, enabled: boolean) => void
}

export function RulesTable({ rules, onEdit, onDelete, onToggle }: RulesTableProps) {
  return (
    <div className="relative overflow-x-auto rounded-md border">
      <table className="w-full text-sm text-left">
        <thead className="text-xs uppercase bg-muted/50">
          <tr>
            <th scope="col" className="px-6 py-3">
              Enabled
            </th>
            <th scope="col" className="px-6 py-3">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    Days Past Due <HelpCircle className="inline-block w-4 h-4 ml-1" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Number of days after the due date when this rule applies</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </th>
            <th scope="col" className="px-6 py-3">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    Notifications <HelpCircle className="inline-block w-4 h-4 ml-1" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Types of notifications sent for this rule</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </th>
            <th scope="col" className="px-6 py-3">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    Fees <HelpCircle className="inline-block w-4 h-4 ml-1" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Fees applied when this rule is triggered</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </th>
            <th scope="col" className="px-6 py-3">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    Auction Date <HelpCircle className="inline-block w-4 h-4 ml-1" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Scheduled auction date, if applicable</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </th>
            <th scope="col" className="px-6 py-3">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {rules.map((rule) => (
            <tr key={rule.id} className="border-b bg-card">
              <td className="px-6 py-4">
                <Switch checked={rule.enabled} onCheckedChange={(checked) => onToggle(rule.id, checked)} />
              </td>
              <td className="px-6 py-4">{rule.daysPastDue}</td>
              <td className="px-6 py-4 max-w-md">{rule.notifications}</td>
              <td className="px-6 py-4">{rule.fees}</td>
              <td className="px-6 py-4">{rule.auctionDate}</td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm" className="text-blue-500 h-8" onClick={() => onEdit(rule)}>
                    <Pencil className="h-4 w-4" />
                    <span className="sr-only">Edit</span>
                  </Button>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="ghost" size="sm" className="text-red-500 h-8">
                        <Trash2 className="h-4 w-4" />
                        <span className="sr-only">Delete</span>
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone. This will permanently delete the rule.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={() => onDelete(rule.id)}>Delete</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

