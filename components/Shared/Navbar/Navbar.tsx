"use client";

import { UserButton } from "@clerk/nextjs";
import { useAuth } from "@clerk/nextjs";
import { Heart, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const { userId } = useAuth();
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <div
      className={cn(
        "w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isHome ? "bg-transparent" : "bg-white"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-x-2">
            <Image src="/logo.svg" alt="KristCarLogo" width={40} height={40} />
            <span
              className={cn(
                "text-2xl font-bold transition-colors",
                isHome ? "text-white" : "text-black"
              )}
            >
              KristCars
            </span>
          </Link>

          <div className="flex items-center gap-x-7">
            <Link
              href="/cars"
              className={cn(
                "text-sm font-medium transition-colors hover:text-gray-900",
                isHome ? "text-white hover:text-gray-200" : "text-gray-700"
              )}
            >
              Lista de carros
            </Link>
            <Link
              href="/dashboard"
              className={cn(
                "text-sm font-medium transition-colors hover:text-gray-900",
                isHome ? "text-white hover:text-gray-200" : "text-gray-700"
              )}
            >
              Panel de inicio
            </Link>
            {userId ? (
              <>
                <Link href="/loved-cars">
                  <Heart
                    strokeWidth={2}
                    className={cn(
                      "cursor-pointer w-5 h-5",
                      isHome ? "text-white" : "text-gray-700"
                    )}
                  />
                </Link>
                <UserButton />
              </>
            ) : (
              <Link href="/sign-in">
                <Button
                  variant={isHome ? "outline" : "default"}
                  className={cn(
                    "flex items-center gap-2",
                    isHome && "border-white text-white hover:bg-white/20"
                  )}
                >
                  <User className="w-4 h-4" />
                  Inicia sesión
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
