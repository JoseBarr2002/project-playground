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
  Blocks,
  Tag,
  Map,
  Grid,
  List,
  Package,
  FileQuestion,
  ReceiptText,
  PiggyBank,
  BookmarkCheck,
  ClipboardList,
  FileDown,
  UserRoundPlus,
  PencilRuler,
  Apple,
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
  {
    name: "Units",
    items: [
      {
        title: "Sitemap",
        url: "/units/sitemap",
        icon: Map,
      },
      {
        title: "Create Unit",
        url: "/units/create-unit",
        icon: Blocks,
      },
      {
        title: "Grid View",
        url: "/units/grid-view",
        icon: Grid,
      },
      {
        title: "List View",
        url: "/units/list",
        icon: List,
      },
      {
        title: "Unit Types",
        url: "/units/unit-types",
        icon: Package,
      },
    ],
  },
  {
    name: "Customers",
    items: [
      {
        title: "Customers",
        url: "/customers",
        icon: Users,
      },
      {
        title: "Retail Sales",
        url: "/customers/retail-sales",
        icon: ReceiptText,
      },
      {
        title: "New Quote",
        url: "/customers/new-quote",
        icon: PiggyBank,
      },
      {
        title: "Reservations",
        url: "/customers/reservations",
        icon: BookmarkCheck,
      },
      {
        title: "Waiting List",
        url: "/customers/waiting-list",
        icon: ClipboardList,
      },
      {
        title: "New Customer",
        url: "/customers/new-customer",
        icon: UserRoundPlus,
      },
      {
        title: "Import Customers",
        url: "/customers/customer-import",
        icon: FileDown,
      },
      {
        title: "Customer Groups",
        url: "/customers/customer-groups",
        icon: FileQuestion,
      },
      {
        title: "Field Settings",
        url: "/customers/field-form",
        icon: Settings,
      },
      {
        title: "Customer Reports",
        url: "/customers/customer-reports",
        icon: FileQuestion,
      },
      {
        title: "Mass Edit Rental Prices",
        url: "/customers/mass-edit-rental-prices",
        icon: PencilRuler,
      },
    ],
  },
  {
    name: "Reports",
    items: [
      {
        title: "Rental",
        url: "/reports",
        icon: Apple,
      },
    ],
  },
]

