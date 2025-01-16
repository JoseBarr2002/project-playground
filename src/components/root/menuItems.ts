import {
  Home,
  Box,
  Users,
  type LucideIcon,
} from "lucide-react";

export const menuItems: { title: string; url: string; icon: LucideIcon }[] = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Customers",
    url: "/customers",
    icon: Users,
  },
  {
    title: "Units",
    url: "/units",
    icon: Box,
  },
];
