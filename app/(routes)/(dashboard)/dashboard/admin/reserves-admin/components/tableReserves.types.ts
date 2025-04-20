import { Order } from "@prisma/client";

export interface User {
  id: string;
  firstName: string | null;
  lastName: string | null;
  email?: string | null;
  image?: string | null;
  username?: string | null;
}

export interface TableReservesProps {
  orders: Order[];
  user: User;
}
