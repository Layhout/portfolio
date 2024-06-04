"use client";

import { motion } from "framer-motion";
import NoiseCanvas from "./NoiseCanvas";
import { useMemo } from "react";

export default function IdleBallBG() {
  const { delayX, delayY } = useMemo(() => ({ delayX: Math.round(Math.random() * 10), delayY: Math.round(Math.random() * 10) }), []);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 5, ease: "linear" }} className="fixed top-0 left-0 h-screen w-screen overflow-hidden -z-10">
      <motion.div
        animate={{ x: ["-30dvw", "70dvw", "-30dvw"] }}
        transition={{
          times: [0, 0.5, 1],
          duration: 100,
          repeat: Infinity,
          repeatDelay: 0,
          delay: -delayX,
        }}
        className="inline-block"
      >
        <motion.div
          animate={{ y: ["-60dvh", "20dvh", "-60dvh"] }}
          transition={{
            times: [0, 0.5, 1],
            duration: 80,
            repeat: Infinity,
            repeatDelay: 0,
            delay: -delayY,
          }}
          className="inline-block"
        >
          <motion.img
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              times: [0, 1],
              duration: 20,
              repeat: Infinity,
              repeatDelay: 0,
              ease: "linear",
            }}
            src="/assets/images/bgBall.png"
            alt="colorful ball"
            className="h-[calc(100dvh+20rem)] opacity-50 object-contain"
          />
        </motion.div>
      </motion.div>
      <NoiseCanvas />
    </motion.div>
  );
}
