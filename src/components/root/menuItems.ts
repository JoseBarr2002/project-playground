import {
  Home,
  LucideIcon,
  ShoppingBag,
  Users,
  MessageCircle,
} from "lucide-react";

export const menuItems: { title: string; url: string; icon: LucideIcon }[] = [
  {
    title: "Dashboard",
    url: "/dashboard",
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
];
