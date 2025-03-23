import Link from "next/link";
import { SidebarItemProps } from "./SidebarItem.types";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const SidebarItem = ({ item }: SidebarItemProps) => {
  const { label, icon: Icon, href } = item;

  const pathName = usePathname();

  const activePath = pathName === href;

  return (
    <Link
      href={href}
      className={cn(
        `flex gap-x-2 mt-2 text-slate-500 text-sm items-center hover:bg-slate-300/20 p-2 rounded-lg cursor-pointer`,
        activePath && `bg-slate-400/20`
      )}
    >
      <Icon className="h-5 w-5" />
      {label}
    </Link>
  );
};

export default SidebarItem;
