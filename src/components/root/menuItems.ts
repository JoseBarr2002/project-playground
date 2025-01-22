import {
  Home,
  LayoutDashboard,
  CheckSquare,
  Users,
  MessageCircle,
  DollarSign,
  CreditCard,
  Settings,
  Clock,
  Percent,
  KeySquare,
  Tag,
} from "lucide-react"
import { type LucideIcon } from "lucide-react"

type MenuItem = {
  title: string
  url: string
  icon: LucideIcon
}

type MenuCategory = {
  name: string
  items: MenuItem[]
}

export const menuCategories: MenuCategory[] = [
  {
    name: "Dashboards",
    items: [
      {
        title: "Overview",
        url: "/dashboard-1",
        icon: Home,
      },
      {
        title: "Analytics",
        url: "/dashboard-2",
        icon: LayoutDashboard,
      },
    ],
  },
  {
    name: "Management",
    items: [
      {
        title: "Tasks",
        url: "/task",
        icon: CheckSquare,
      },
      {
        title: "Users",
        url: "/setup/settings",
        icon: Users,
      },
      {
        title: "Messages",
        url: "/setup/contact",
        icon: MessageCircle,
      },
    ],
  },
  {
    name: "Finance",
    items: [
      {
        title: "Pricing",
        url: "/setup/fees",
        icon: DollarSign,
      },
      {
        title: "Payments",
        url: "/setup/payment-processing",
        icon: CreditCard,
      },
    ],
  },
  {
    name: "Setup",
    items: [
      {
        title: "General Settings",
        url: "/setup/website-settings",
        icon: Settings,
      },
      {
        title: "Scheduling",
        url: "/setup/past-due-rules",
        icon: Clock,
      },
      {
        title: "Pricing Rules",
        url: "/setup/rate-management",
        icon: Percent,
      },
      {
        title: "Access Control",
        url: "/setup/gate-settings",
        icon: KeySquare,
      },
      {
        title: "Marketing",
        url: "/setup/promotions",
        icon: Tag,
      },
    ],
  },
]

