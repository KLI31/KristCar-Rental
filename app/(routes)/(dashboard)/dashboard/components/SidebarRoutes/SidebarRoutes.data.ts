import { Calendar, Car, Heart } from "lucide-react";

export const dataGeneralSidebar = [
  {
    id: 1,
    icon: Car,
    label: "Cars",
    href: "/dashboard",
  },
  {
    id: 2,
    icon: Calendar,
    label: "Cars resevations",
    href: "/dashboard/reserves",
  },
  {
    id: 3,
    icon: Heart,
    label: "My cars",
    href: "/loved-cars",
  },
];

export const dataAdminSidebar = [
  {
    id: 1,
    icon: Car,
    label: "Manage your cars",
    href: "/dashboard/admin/manage-cars",
  },
  {
    id: 2,
    icon: Calendar,
    label: "All reservations",
    href: "/admin/all-reservations",
  },
];
