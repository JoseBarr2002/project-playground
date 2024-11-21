import { SidebarProvider } from "@components/ui/sidebar";
import { TooltipProvider } from "@components/ui/tooltip";

const ProviderWrapper = ({ children }) => (
  <TooltipProvider>
    <SidebarProvider>{children}</SidebarProvider>
  </TooltipProvider>
);

export default ProviderWrapper;
