"use client";
import { Separator } from "@/components/ui/separator";
import { useAuth } from "@clerk/nextjs";
import { dataAdminSidebar, dataGeneralSidebar } from "./SidebarRoutes.data";
import SidebarItem from "../SidebarItem/SidebarItem";
import { isAdministrator } from "@/lib/isAdministrator";

const SidebarRoutes = () => {
  const { userId } = useAuth();

  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <div className="p-2 md:p-6">
          <p className="mb-2 text-slate-500 uppercase">general</p>
          {dataGeneralSidebar.map((item) => (
            <SidebarItem key={item.id} item={item} />
          ))}
        </div>

        <Separator />

        {isAdministrator(userId) && (
          <div className="p-2 md:p-6">
            <p className="mb-2 text-slate-500 uppercase">
              Panel administrativo
            </p>
            {dataAdminSidebar.map((item) => (
              <SidebarItem key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
      <div>
        <Separator />

        <footer className="p-3 mt-3 text-center">2025. KrisCars Inc.</footer>
      </div>
    </div>
  );
};

export default SidebarRoutes;
