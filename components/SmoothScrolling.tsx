"use client";

import { isMobile } from "@/lib/utils";
import { ReactLenis } from "@studio-freight/react-lenis";
import { useEffect, useState } from "react";

export default function SmoothScrolling({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isSmoothScroll, setIsSmoothScroll] = useState<boolean | null>(null);

  useEffect(() => {
    setIsSmoothScroll(!isMobile(navigator.userAgent || navigator.vendor || (window as any).opera));
  }, []);
  console.log(isSmoothScroll);

  if (isSmoothScroll === null) return null;
  else if (!isSmoothScroll) return <>{children}</>;
  else
    return (
      <ReactLenis root options={{ syncTouch: false }}>
        {children}
      </ReactLenis>
    );
}
