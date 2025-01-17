import { Button } from "@components/ui/button";
import { Input } from "@components/ui/input";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@components/ui/navigation-menu";
import { Bell } from "lucide-react";
import ProfileDropdownMenu from "./profileDropdownMenu";

const Header = () => (
  <header className="p-4 bg-gray-900 border-b flex justify-end text-white">
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Input className="w-64" placeholder="Search..." />
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Button variant="ghost" size="icon">
            <Bell />
          </Button>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <ProfileDropdownMenu />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  </header>
);
export default Header;
