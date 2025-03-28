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
  title: "Rental card",
  description: "Course rental card with Nextjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${outFit.className}`}>
          <NextTopLoader color="#000" />

          {children}
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
