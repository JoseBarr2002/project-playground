import React from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@components/ui/accordion"
import { menuCategories } from "./menuItems"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
  useSidebar,
} from "@components/ui/sidebar"
import { Button } from "@components/ui/button"
import { Label } from "@components/ui/label"
import { Menu, X } from "lucide-react"
import { GiGoat } from "react-icons/gi"

const AppSidebar = () => {
  return (
    <SidebarProvider>
      <Sidebar collapsible="icon" className="border-r border-gray-200 dark:border-gray-800">
        <SidebarContent className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
          <SidebarGroup className="p-0">
            <SidebarGroupLabel className="flex items-center justify-between h-16 px-4 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-none opacity-100">
              <SidebarToggle />
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <Accordion type="multiple" className="w-full">
                {menuCategories.map((category, index) => (
                  <AccordionItem value={`item-${index}`} key={index} className="border-b-0">
                    <AccordionTrigger className="px-4 py-3 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                      {category.name}
                    </AccordionTrigger>
                    <AccordionContent>
                      <SidebarMenu className="p-2 space-y-1">
                        {category.items.map((item) => (
                          <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton asChild>
                              <a
                                href={item.url}
                                className="flex items-center px-4 py-2 text-sm rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                              >
                                <item.icon className="mr-3 h-4 w-4" />
                                <span>{item.title}</span>
                              </a>
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                        ))}
                      </SidebarMenu>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
  )
}

const SidebarToggle = () => {
  const { open, toggleSidebar } = useSidebar()

  return (
    <>
      <div className="flex items-center space-x-2">
        {open &&<GiGoat className="size-7 text-blue-600 dark:text-blue-400" />}
        {open && <Label className="text-xl font-semibold">GOAT Storage</Label>}
      </div>
      <Button variant="ghost" onClick={toggleSidebar} size="icon" className="text-gray-600 dark:text-gray-300">
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>
    </>
  )
}

export default AppSidebar

