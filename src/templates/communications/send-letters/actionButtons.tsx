import { Button } from "@components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@components/ui/dialog"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@components/ui/tooltip"
import { Eye } from "lucide-react"

interface ActionButtonsProps {
  onPreview: () => void
  onSaveDraft: () => void
  onSendEmail: () => void
  recipients: string[]
  subject: string
  message: string
}

export default function ActionButtons({
  onPreview,
  onSaveDraft,
  onSendEmail,
  recipients,
  subject,
  message,
}: ActionButtonsProps) {
  return (
    <div className="flex justify-between items-center mt-6">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2" onClick={onPreview}>
              <Eye className="h-4 w-4" />
              Preview
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Preview your email before sending</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <div className="space-x-2">
        <Button variant="outline" onClick={onSaveDraft}>
          Save Draft
        </Button>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-blue-500 hover:bg-blue-600">Send Email</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Confirm Email Send</DialogTitle>
            </DialogHeader>
            <div className="py-4">
              <p>Are you sure you want to send this email to {recipients.length} recipient(s)?</p>
              <div className="mt-4 space-y-2">
                <p>
                  <strong>Subject:</strong> {subject}
                </p>
                <p>
                  <strong>Message Preview:</strong> {message.slice(0, 100)}...
                </p>
              </div>
            </div>
            <div className="flex justify-end space-x-2">
              <Button variant="outline">Cancel</Button>
              <Button onClick={onSendEmail} className="bg-blue-500 hover:bg-blue-600">
                Confirm Send
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}

