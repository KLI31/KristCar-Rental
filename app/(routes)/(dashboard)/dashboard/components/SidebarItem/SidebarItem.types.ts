import { LucideIcon } from "lucide-react";

export type SidebarItemProps = {
  item: {
    id: number;
    label: string;
    icon: LucideIcon;
    href: string;
  };
  key: number;
};
