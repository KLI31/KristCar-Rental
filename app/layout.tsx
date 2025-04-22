import type { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster";

const outFit = Outfit({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KristCar - Alquiler de Vehículos",
  description:
    "La mejor plataforma para alquilar vehículos de lujo y económicos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${outFit.className} overflow-x-hidden`}>
          <NextTopLoader color="#000" />
          <div className="w-full max-w-full">{children}</div>
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
