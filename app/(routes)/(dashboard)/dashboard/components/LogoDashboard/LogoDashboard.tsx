import Link from "next/link";
import Image from "next/image";

const LogoDashboard = () => {
  return (
    <Link
      href="/"
      className="flex items-center justify-center h-20 gap-2 border-b cursor-pointer min-h-20"
    >
      <Image src="/logo.svg" alt="logo" width="30" height="30" priority />
      <h1 className="text-xl font-bold">KristCars</h1>
    </Link>
  );
};

export default LogoDashboard;
