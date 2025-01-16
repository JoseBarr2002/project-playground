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
import { SquareSigma, Menu, X } from "lucide-react";
import { Label } from "@components/ui/label";
import { Button } from "@components/ui/button";

const AppSidebar = () => {
  // State management: Keeps track of the sidebar's open/closed state
  const { open, toggleSidebar } = useSidebar();

  return (
    <Sidebar collapsible="icon">
      <SidebarContent className="bg-gray-900">
        <SidebarGroup className="p-0">
          <SidebarGroupLabel className="flex items-center justify-between h-16 px-4 bg-gray-900 text-white rounded-lg opacity-100">
            {/* Different logo for open and closed */}
            {open ? <SquareSigma /> : null}
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
                  <SidebarMenuButton asChild   className="text-green-400 hover:bg-green-900 hover:text-green-400">
                    <a href={item.url}>
                      <item.icon />
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
