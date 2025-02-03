import { Button } from "@components/ui/button"
import { Input } from "@components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@components/ui/dialog"
import { Search } from "lucide-react"
import { NewTemplateForm } from "./newTemplateForm"
import type { LetterTemplate } from "./ILetterTemplate"

interface PageHeaderProps {
  title: string
  searchTerm: string
  onSearchChange: (value: string) => void
  onAddTemplate: (template: LetterTemplate) => void
}

export function PageHeader({ title, searchTerm, onSearchChange, onAddTemplate }: PageHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
      <h1 className="text-2xl font-semibold text-blue-700">{title}</h1>
      <div className="flex items-center gap-4 w-full sm:w-auto">
        <div className="relative flex-grow sm:flex-grow-0">
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder="Search templates..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-8 pr-4 py-2 w-full"
          />
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="default" className="text-white hover:bg-blue-700" size="sm">
              New Template
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>Create New Template</DialogTitle>
            </DialogHeader>
            <NewTemplateForm onSubmit={onAddTemplate} />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}

