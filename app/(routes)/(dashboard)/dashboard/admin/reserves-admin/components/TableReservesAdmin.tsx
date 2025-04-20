import { TableReservesProps } from "./tableReserves.types";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableFooter,
  TableCaption,
} from "@/components/ui/table";
import { useMemo } from "react";

const TableReservesAdmin = ({ orders, user }: TableReservesProps) => {
  const totalAmount = useMemo(
    () => orders.reduce((acc, order) => acc + Number(order.totalAmount), 0),
    [orders]
  );

  const userName = useMemo(() => {
    return `${user.firstName} ${user.lastName}`;
  }, [user]);

  return (
    <Table>
      <TableCaption>Lista de las ultimas reservas</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Fecha de reserva</TableHead>
          <TableHead>ID del cliente</TableHead>
          <TableHead>Nombre del cliente</TableHead>
          <TableHead>Vehiculo</TableHead>
          <TableHead>Fecha de inicio</TableHead>
          <TableHead>Fecha de fin</TableHead>
          <TableHead className="text-right">Monto</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order) => (
          <TableRow key={order.id}>
            <TableCell className="font-medium">
              {order.createdAt.toLocaleDateString()}
            </TableCell>
            <TableCell>{order.userId}</TableCell>
            <TableCell>{userName}</TableCell>
            <TableCell>{order.carName}</TableCell>
            <TableCell>{order.orderDate.toLocaleDateString()}</TableCell>
            <TableCell>{order.orderEndDate.toLocaleDateString()}</TableCell>
            <TableCell className="text-right">${order.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={6}>Total</TableCell>
          <TableCell className="text-right">${totalAmount}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
};

export default TableReservesAdmin;
