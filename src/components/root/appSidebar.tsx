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
import { ChefHat, Menu, X } from "lucide-react";
import { Label } from "@components/ui/label";
import { Button } from "@components/ui/button";

const AppSidebar = () => {
  const { open, toggleSidebar } = useSidebar();

  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarGroup className="p-0">
          <SidebarGroupLabel className="flex items-center justify-between h-16 px-4 bg-gray-900 text-white rounded-none opacity-100">
            {open ? <ChefHat /> : null}
            {open ? (
              <Label className="text-xl font-semibold">Gourmet POS</Label>
            ) : null}
            <Button variant="ghost" onClick={toggleSidebar} size="icon">
              {open ? <X /> : <Menu />}
            </Button>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="p-4 g-0 space-y-2">
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
