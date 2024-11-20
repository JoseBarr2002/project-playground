import "../global.css";
import { Slot } from "expo-router";

import { TooltipProvider } from "@components/ui/tooltip";
import { SidebarProvider } from "@components/ui/sidebar";
import AppSidebar from "@components/sidebar";

const MainLayout = () => {
  return (
    <TooltipProvider>
      <SidebarProvider>
        <AppSidebar />
        <main>
          <Slot />
        </main>
      </SidebarProvider>
    </TooltipProvider>
  );
};

export default MainLayout;
