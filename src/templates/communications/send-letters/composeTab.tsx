import { Input } from "@components/ui/input"
import { Label } from "@components/ui/label"
import { Textarea } from "@components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@components/ui/select"
import { Button } from "@components/ui/button"
import { Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight, List } from "lucide-react"

interface ComposeTabProps {
  subject: string
  message: string
  onSubjectChange: (subject: string) => void
  onMessageChange: (message: string) => void
}

export default function ComposeTab({ subject, message, onSubjectChange, onMessageChange }: ComposeTabProps) {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label>
          Subject <span className="text-red-500">*</span>
        </Label>
        <Input placeholder="Enter email subject" value={subject} onChange={(e) => onSubjectChange(e.target.value)} />
      </div>

      <div className="space-y-2">
        <Label>
          Message <span className="text-red-500">*</span>
        </Label>
        <div className="border rounded-md">
          <div className="flex items-center border-b p-2 gap-2 flex-wrap">
            <Select defaultValue="paragraph">
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="paragraph">Paragraph</SelectItem>
                <SelectItem value="heading1">Heading 1</SelectItem>
                <SelectItem value="heading2">Heading 2</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="12">
              <SelectTrigger className="w-20">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="12">12pt</SelectItem>
                <SelectItem value="14">14pt</SelectItem>
                <SelectItem value="16">16pt</SelectItem>
              </SelectContent>
            </Select>
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="icon">
                <Bold className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Italic className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Underline className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="icon">
                <AlignLeft className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <AlignCenter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <AlignRight className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <Textarea
            className="border-0 rounded-none min-h-[300px]"
            placeholder="Enter your message here..."
            value={message}
            onChange={(e) => onMessageChange(e.target.value)}
          />
        </div>
      </div>
    </div>
  )
}

