"use client";

import { motion } from "framer-motion";
import { easeOutQuart } from "@/lib/constants";
import { useEffect, useRef } from "react";

export default function Intro() {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timerId = setTimeout(() => {
      wrapperRef.current!.style.display = "none";
    }, 3200);

    return () => {
      clearTimeout(timerId);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 h-screen w-screen z-[9999]" ref={wrapperRef}>
      <motion.div
        initial={{ y: "0%" }}
        animate={{ y: "110%" }}
        transition={{ duration: 1.2, delay: 2, ease: easeOutQuart }}
        className="absolute top-0 left-0 w-full h-full bg-black flex justify-center items-center"
      >
        <div className="overflow-hidden w-[200px]">
          <motion.img
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1.5, delay: 0.5, ease: easeOutQuart }}
            src="/assets/images/CLH_white.png"
            className="w-full"
            alt="my logo"
          />
        </div>
      </motion.div>
    </div>
  );
}
