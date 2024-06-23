import type { Metadata } from "next";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";
import { cn } from "@/lib/utils";
import { basisGrotesqueArabic } from "@/lib/font";
import IdleBallBG from "@/components/IdleBallBG";

export const metadata: Metadata = {
  title: "Chea Layhout",
  description:
    "A web/mobile developer with 3+ years experience who's driven by an insatiable hunger for experience and knowledge. My ultimate ambition is to evolve into a proficient full-stack developer.",
  authors: { name: "Chea Layhout" },
  openGraph: {
    siteName: "Chea Layhout",
    title: "Chea Layhout",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("font-sans antialiased text-gray-700 dark:text-gray-200", basisGrotesqueArabic.variable)}>
        <IdleBallBG />
        <SmoothScrolling>{children}</SmoothScrolling>
      </body>
    </html>
  );
}
