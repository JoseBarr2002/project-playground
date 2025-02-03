import { Toast, ToastTitle } from "@components/ui/toast"
import { AlertCircle, Mail } from "lucide-react"

interface ToastNotificationProps {
  show: boolean
  message: string
  onClose: () => void
}

export default function ToastNotification({ show, message, onClose }: ToastNotificationProps) {
  if (!show) return null

  return (
    <Toast
      variant={message.includes("successfully") ? "default" : "destructive"}
      className="fixed bottom-4 right-4 w-auto"
    >
      <div className="flex items-center space-x-2">
        {message.includes("successfully") ? <Mail className="h-4 w-4" /> : <AlertCircle className="h-4 w-4" />}
        <ToastTitle>{message}</ToastTitle>
      </div>
    </Toast>
  )
}

