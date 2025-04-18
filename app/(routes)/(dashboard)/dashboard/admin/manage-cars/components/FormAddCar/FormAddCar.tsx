"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import axios from "axios";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { formSchema } from "./FormAddCar.form";

import {
  Select,
  SelectItem,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState, useRef } from "react";
import { FormAddCarProps } from "./FormAddCar.types";
import { useToast } from "@/hooks/use-toast";
import { useUserCar } from "@/hooks/useUserCar";
import Image from "next/image";

const FormAddCar = ({ openDialog }: FormAddCarProps) => {
  const [photoUploaded, setPhotoUploaded] = useState(false);
  const inputFieldRef = useRef<HTMLInputElement>(null);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      cv: "",
      transmission: "manual",
      people: "",
      photo: "",
      engine: "gasoil",
      type: "sedan",
      priceDay: "",
      isPublish: false,
    },
  });
  const { toast } = useToast();
  const { mutate } = useUserCar();

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    openDialog(false);
    try {
      await axios.post("/api/car", values);
      await mutate();
      toast({
        title: "Car created ✅",
        description: "The car has been created succesfully",
        duration: 2000,
      });
      form.reset();
      setPhotoUploaded(false);
    } catch (error) {
      console.log("Error =>", error);
      toast({
        title: "Error",
        description: "Error creating the car",
        variant: "destructive",
        duration: 2000,
      });
    }
  };

  const { isValid } = form.formState;

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
        if (!res.ok) throw new Error("Upload failed");
        const data = await res.json();
        form.setValue("photo", data.url);
        setPhotoUploaded(true);
      } catch (err) {
        console.error(err);
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name car</FormLabel>
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
                <FormLabel>Power</FormLabel>
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
                <FormLabel>transmission</FormLabel>
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
                <FormLabel>People</FormLabel>
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
                <FormLabel>Type</FormLabel>
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
                <FormLabel>Car Image</FormLabel>
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
                <FormLabel>Price of the day</FormLabel>
                <FormControl>
                  <Input placeholder="20$" type="number" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" className="w-full mt-5" disabled={!isValid}>
          Crear tu vehiculo
        </Button>
      </form>
    </Form>
  );
};

export default FormAddCar;
