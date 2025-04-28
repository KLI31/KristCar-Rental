import React from "react";
import Image from "next/image";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-screen h-screen grid lg:grid-cols-2">
      <div className="flex items-center justify-center w-full h-full">
        {children}
      </div>
      <div className="hidden lg:flex flex-col items-center justify-center w-full h-full bg-slate-300">
        <Image src="/logo.svg" alt="logo KristCars" width="90" height="90" />
        <h1 className="text-xl font-bold mt-1">KristCars</h1>
      </div>
    </div>
  );
};

export default AuthLayout;
