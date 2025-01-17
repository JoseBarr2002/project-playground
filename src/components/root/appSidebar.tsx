import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@components/ui/sidebar";
import { menuItems } from "./menuItems";
import { Menu, X } from "lucide-react";
import { GiGoat } from "react-icons/gi";
import { Label } from "@components/ui/label";
import { Button } from "@components/ui/button";

const AppSidebar = () => {
  // State management: Keeps track of the sidebar's open/closed state
  const { open, toggleSidebar } = useSidebar();

  return (
    <Sidebar collapsible="icon">
      <SidebarContent className="text-white" style={{ backgroundColor: "#111827" }}>
        <SidebarGroup className="p-0">
          <SidebarGroupLabel className="flex items-center justify-between h-16 px-4 bg-gray-900 text-white rounded-none opacity-100">
            {/* Different logo for open and closed */}
            {open ? <GiGoat className="size-7" /> : null}
            {/* Different title for open and closed */}
            {open ? (
              <Label className="text-xl font-semibold">GOAT Storage</Label>
            ) : null}
            {/* Different icon for open and closed */}
            <Button variant="ghost" onClick={toggleSidebar} size="icon">
              {open ? <X /> : <Menu />}
            </Button>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="p-4 g-0 space-y-2">
              {/* Iterates over the menu items and renders them */}
              {menuItems.map(item => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon className="mr-2 h-4 w-4" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
