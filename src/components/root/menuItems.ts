import {
  Home,
  LucideIcon,
  ShoppingBag,
  Users,
  MessageCircle,
  DollarSign,
  CreditCard,
  MonitorCog,
  Clock,
  Percent,
  KeySquare,
  Tag,
} from "lucide-react";

export const menuItems: { title: string; url: string; icon: LucideIcon }[] = [
  {
    title: "Dashboard-1",
    url: "/dashboard-1",
    icon: Home,
  },
  {
    title: "Dashboard-2",
    url: "/dashboard-2",
    icon: Home,
  },
  {
    title: "Task",
    url: "/task",
    icon: ShoppingBag,
  },
  {
    title: "Settings",
    url: "/setup/settings",
    icon: Users,
  },
  {
    title: "Contact",
    url: "/setup/contact",
    icon: MessageCircle,
  },
  {
    title: "Fees",
    url: "/setup/fees",
    icon: DollarSign,
  },
  {
    title: "Payment Processing",
    url: "/setup/payment-processing",
    icon: CreditCard,
  },
  {
    title: "Website Settings",
    url: "/setup/website-settings",
    icon: MonitorCog,
  },
  {
    title: "Past Due Rules",
    url: "/setup/past-due-rules",
    icon: Clock,
  },
  {
    title: "Rate Management",
    url: "/setup/rate-management",
    icon: Percent,
  },
  {
    title: "Gate Settings",
    url: "/setup/gate-settings",
    icon: KeySquare,
  },
  {
    title: "Promotions",
    url: "/setup/promotions",
    icon: Tag,
  },
];
