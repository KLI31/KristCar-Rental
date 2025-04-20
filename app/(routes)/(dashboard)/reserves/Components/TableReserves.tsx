import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TableReservesProps } from "./tableReserves.types";
import { formatPrice } from "@/utils/formatPrice";
import { useMemo } from "react";
import { Badge } from "@/components/ui/badge";

const TableReserves = ({ orders }: TableReservesProps) => {
  const totalAmount = useMemo(() => {
    return orders.reduce((acc, order) => acc + Number(order.totalAmount), 0);
  }, [orders]);

  return (
    <Table>
      <TableCaption>Lista de tus ultimas reservas</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Nombre del vehiculo</TableHead>
          <TableHead>Fecha de reserva</TableHead>
          <TableHead>Fecha de entrega</TableHead>
          <TableHead>Estado</TableHead>
          <TableHead className="text-right">Total</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order) => (
          <TableRow key={order.id}>
            <TableCell className="font-medium">{order.carName}</TableCell>
            <TableCell>{order.orderDate.toLocaleDateString()}</TableCell>
            <TableCell>{order.orderEndDate.toLocaleDateString()}</TableCell>
            <TableCell>
              <Badge
                className={`${
                  order.status === "confirmed"
                    ? "bg-green-500 text-white"
                    : "bg-red-500 text-white"
                }`}
                variant={order.status === "confirmed" ? "default" : "secondary"}
              >
                {order.status === "confirmed" ? "Confirmado" : "Cancelado"}
              </Badge>
            </TableCell>

            <TableCell className="text-right">
              {formatPrice(order.totalAmount)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={4}>Total</TableCell>
          <TableCell className="text-right">
            {formatPrice(totalAmount)}
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
};

export default TableReserves;
