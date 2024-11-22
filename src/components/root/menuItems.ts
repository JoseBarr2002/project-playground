import {
  Home,
  LucideIcon,
  ShoppingBag,
  Users,
} from "lucide-react";

export const menuItems: { title: string; url: string; icon: LucideIcon }[] = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Orders",
    url: "/orders",
    icon: ShoppingBag,
  },
  {
    title: "Customers",
    url: "#",
    icon: Users,
  },
];
