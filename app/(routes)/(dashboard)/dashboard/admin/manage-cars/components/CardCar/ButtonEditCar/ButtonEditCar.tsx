"use client";
import { Car } from "@prisma/client";
import { Pencil } from "lucide-react";
import {
  Dialog,
  DialogDescription,
  DialogTrigger,
  DialogTitle,
  DialogHeader,
  DialogContent,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import FormEditCar from "../FormEditCar/FormEditCar";

type ButtonEditCarProps = {
  carData: Car;
};

const ButtonEditCar = ({ carData }: ButtonEditCarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant={"outline"}
          size="sm"
          onClick={() => setIsOpen(true)}
          className="text-gray-700 border-gray-300 hover:bg-gray-100 hover:text-gray-900 transition-colors"
        >
          Editar
          <Pencil className="w-4 h-4 ml-2" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Editar coche</DialogTitle>
          <DialogDescription>
            Aquí podrás editar la información de tu coche.
          </DialogDescription>
        </DialogHeader>
        <FormEditCar carData={carData} setOpenDialog={setIsOpen} />
      </DialogContent>
    </Dialog>
  );
};

export default ButtonEditCar;
