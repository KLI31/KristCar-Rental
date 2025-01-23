import React from "react";
import Image from "next/image";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid lg:grid-cols-2 h-full items-center justify-center ">
      <div className="flex items-center justify-center">{children}</div>
      <div className="hidden lg:flex lg:bg-slate-300 h-full justify-center items-center lg:flex-col">
        <Image src="/logo.svg" alt="logo KristCars" width="90" height="90" />
        <h1 className="text-xl font-bold mt-1">KristCars</h1>
      </div>
    </div>
  );
};

export default AuthLayout;
