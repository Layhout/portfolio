import type { Metadata } from "next";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";
import { cn } from "@/lib/utils";
import { basisGrotesqueArabic } from "@/lib/font";
import IdleBallBG from "@/components/IdleBallBG";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("min-h-dvh font-sans antialiased", basisGrotesqueArabic.variable)}>
        <IdleBallBG />
        <SmoothScrolling>{children}</SmoothScrolling>
      </body>
    </html>
  );
}
