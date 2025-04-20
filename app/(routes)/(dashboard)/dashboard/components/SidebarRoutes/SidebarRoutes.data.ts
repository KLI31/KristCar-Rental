import { Calendar, Car, Heart } from "lucide-react";

export const dataGeneralSidebar = [
  {
    id: 1,
    icon: Car,
    label: "Vehiculos disponibles",
    href: "/dashboard",
  },
  {
    id: 2,
    icon: Calendar,
    label: "Reservar vehiculo",
    href: "/reserves",
  },
  {
    id: 3,
    icon: Heart,
    label: "Mis vehiculos favoritos",
    href: "/loved-cars",
  },
];

export const dataAdminSidebar = [
  {
    id: 1,
    icon: Car,
    label: "Gestiona tus vehiculos",
    href: "/dashboard/admin/manage-cars",
  },
  {
    id: 2,
    icon: Calendar,
    label: "Todas las reservas",
    href: "/dashboard/admin/reserves-admin",
  },
];
