"use client";

import { UserButton } from "@clerk/nextjs";
import { useAuth } from "@clerk/nextjs";
import { Heart, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const { userId } = useAuth();

  console.log(userId);

  return (
    <div className="max-w-5xl py-5 mx-auto">
      <div className="justify-between lg:flex">
        <Link href="/" className="flex items-center gap-x-2">
          <Image src="/logo.svg" alt="KristCarLogo" width={40} height={40} />
          <span className="text-xl font-bold">KristCars</span>
        </Link>

        <div className="flex items-center justify-center gap-x-7">
          <Link href={"/cars"}>Lista de carros</Link>
          <Link href={"/dashboad"}>Panel de inicio</Link>
          {userId ? (
            <>
              <Link href={"/loved-cars"}>
                <Heart strokeWidth={2} className="cursor-pointer" />
              </Link>
              <UserButton />
            </>
          ) : (
            <Link
              href={"/sign-in"}
              className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
            >
              Inicia sesion
              <User className="ml-2 w-4 h-4" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
