"use client";
import { Car } from "@prisma/client";
import { Dispatch, SetStateAction } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useRouter } from "next/navigation";
import Image from "next/image";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { formSchema } from "./FormEditCar.form";

import {
  Select,
  SelectItem,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useState, useRef } from "react";
import { useToast } from "@/hooks/use-toast";

type FormEditCarProps = {
  carData: Car;
  setOpenDialog: Dispatch<SetStateAction<boolean>>;
};

const FormEditCar = ({ carData, setOpenDialog }: FormEditCarProps) => {
  const [photoUploaded, setPhotoUploaded] = useState(false);
  const router = useRouter();
  const { toast } = useToast();
  const inputFieldRef = useRef<HTMLInputElement>(null);

  const validTransmission = (
    value: string
  ): "manual" | "automatic" | undefined =>
    value === "manual" || value === "automatic" ? value : undefined;

  const validEngine = (
    value: string
  ): "gasoil" | "diesel" | "electric" | "hybrid" | undefined =>
    ["gasoil", "diesel", "electric", "hybrid"].includes(value)
      ? (value as any)
      : undefined;

  const validType = (
    value: string
  ): "sedan" | "suv" | "familiar" | "luxe" | undefined =>
    ["sedan", "suv", "familiar", "luxe"].includes(value)
      ? (value as any)
      : undefined;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: carData.name,
      cv: carData.cv,
      transmission: validTransmission(carData.transmission),
      people: carData.people,
      photo: carData.photo,
      engine: validEngine(carData.engine),
      type: validType(carData.type),
      priceDay: carData.priceDay,
      isPublish: carData.isPublish ? carData.isPublish : false,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setOpenDialog(false);
    try {
      await axios.patch(`/api/car/${carData.id}/form`, values);
      toast({
        title: "Success",
        description: "Carro editado correctamente",
      });
      router.refresh();
    } catch (error) {
      console.error("Error =>", error);
      toast({
        title: "Error",
        description: "Ocurrio un error al editar el carro",
        variant: "destructive",
      });
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;
    const reader = new FileReader();

    reader.onloadend = async () => {
      try {
        const res = await fetch("/api/upload", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ image: reader.result }),
        });

        if (!res.ok) {
          throw new Error("Error uploading image");
        }
        const data = await res.json();
        form.setValue("photo", data.url);
        setPhotoUploaded(true);
      } catch (error) {
        console.log(error);
      }
    };
  };

  const { isValid } = form.formState;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre del vehiculo</FormLabel>
                <FormControl>
                  <Input placeholder="Tesla Model S Plaid" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="cv"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Fuerza</FormLabel>
                <FormControl>
                  <Input placeholder="150 CV" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="transmission"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Transmision</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select the type of car" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="manual">Manual</SelectItem>
                    <SelectItem value="automatic">Automatic</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="people"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Personas</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select the cuantity of people" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="4">4</SelectItem>
                    <SelectItem value="5">5</SelectItem>
                    <SelectItem value="7">7</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="engine"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Engine</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select the engine of the car" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="gasoil">Gasolina</SelectItem>
                    <SelectItem value="diesel">Diesel</SelectItem>
                    <SelectItem value="electric">Electrico</SelectItem>
                    <SelectItem value="hybrid">Hibrido</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tipo</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select the type of  car" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="sedan">Sedan</SelectItem>
                    <SelectItem value="suv">SUV</SelectItem>
                    <SelectItem value="familiar">Familiar</SelectItem>
                    <SelectItem value="luxe">De luxe</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="photo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Imagen Vehiculo</FormLabel>
                <FormControl>
                  <div
                    className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-4 cursor-pointer hover:border-blue-400 transition"
                    onClick={() => inputFieldRef.current?.click()}
                  >
                    {form.watch("photo") ? (
                      <Image
                        width={200}
                        height={200}
                        src={form.watch("photo")}
                        alt="Previsualización"
                        className="w-full h-40 object-cover rounded mb-2"
                      />
                    ) : (
                      <span className="text-gray-400 mb-2">
                        Haz clic o arrastra una imagen aquí
                      </span>
                    )}
                    <input
                      type="file"
                      ref={inputFieldRef}
                      accept="image/*"
                      className="hidden"
                      onChange={handleImageUpload}
                    />
                    {photoUploaded && (
                      <p className="text-green-600 text-sm mt-2">
                        Imagen subida correctamente
                      </p>
                    )}
                  </div>
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="priceDay"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Precio del dia</FormLabel>
                <FormControl>
                  <Input placeholder="20$" type="number" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" className="w-full mt-5" disabled={!isValid}>
          Editar Vehiculo
        </Button>
      </form>
    </Form>
  );
};

export default FormEditCar;
