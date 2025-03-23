"use client";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import SidebarRoutes from "../SidebarRoutes/SidebarRoutes";
import { UserButton } from "@clerk/nextjs";

const NavbarDashboard = () => {
  return (
    <nav className="flex items-center justify-between w-full h-20 px-2 border-b gap-x-4 md:px-6 bg-background">
      <div className="flex flex-1 justify-end">
        <UserButton />
      </div>
      <div className="block xl:hidden">
        <Sheet>
          <SheetTrigger className="flex items-center">
            <Menu />
          </SheetTrigger>
          <SheetContent side={"left"}>
            <SheetTitle>Menu</SheetTitle>
            <SidebarRoutes />
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default NavbarDashboard;
