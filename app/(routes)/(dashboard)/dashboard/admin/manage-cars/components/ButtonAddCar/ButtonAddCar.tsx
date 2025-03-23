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
    <Dialog open={isOpen}>
      <DialogTrigger asChild>
        <Button variant={"outline"} onClick={() => setIsOpen(true)}>
          Add new car
          <PlusCircle className=" ml-2" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Add new car</DialogTitle>
        <DialogHeader>
          <DialogDescription>
            <FormAddCar openDialog={setIsOpen} />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ButtonAddCar;
