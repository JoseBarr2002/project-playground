import { Button } from "@components/ui/button"
import { CardContent } from "@components/ui/card"
import { CreditCard, Calendar, LifeBuoy } from "lucide-react"

interface SidebarNavigationProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

export default function SidebarNavigation({ activeTab, setActiveTab }: SidebarNavigationProps) {
  const navItems = [
    { id: "payment-methods", label: "Payment Methods & Fees", icon: CreditCard },
    { id: "schedule", label: "Payment Schedule", icon: Calendar },
    { id: "support", label: "Support", icon: LifeBuoy },
  ]

  return (
    <CardContent className="p-4">
      <nav className="space-y-2">
        {navItems.map((item) => (
          <Button
            key={item.id}
            variant={activeTab === item.id ? "default" : "ghost"}
            className="w-full justify-start"
            onClick={() => {
              setActiveTab(item.id)
              document.getElementById(item.id)?.click()
            }}
          >
            <item.icon className="mr-2 h-4 w-4" />
            {item.label}
          </Button>
        ))}
      </nav>
    </CardContent>
  )
}

