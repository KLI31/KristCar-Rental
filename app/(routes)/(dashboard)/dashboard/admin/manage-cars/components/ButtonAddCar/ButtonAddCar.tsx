"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PlusCircle } from "lucide-react";
import { useState } from "react";
import FormAddCar from "../FormAddCar/FormAddCar";
import { DialogTitle } from "@radix-ui/react-dialog";

const ButtonAddCar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant={"outline"} onClick={() => setIsOpen(true)}>
          Añadir un nuevo vehiculo
          <PlusCircle />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Añade tu nuevo vehiculo</DialogTitle>
        <DialogHeader>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <FormAddCar openDialog={setIsOpen} />
      </DialogContent>
    </Dialog>
  );
};

export default ButtonAddCar;
