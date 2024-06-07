"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef } from "react";
import { motion, MotionValue, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

const MOVE_RANGE = 30;
const LINEAR_EASE = "transition-transform duration-100 ease-linear";
const ABOUT_ME = `A frontend developer with ${
  new Date().getFullYear() - 2021
}+ years experience who's driven by an insatiable hunger for experience and knowledge. My ultimate ambition is to evolve into a proficient full-stack developer.`;

export default function Hero() {
  const aboutMeWrapper = useRef<HTMLElement>(null);
  const myNameWrapper = useRef<HTMLElement>(null);

  const mouseXValue = useMotionValue(0);
  const mouseYValue = useMotionValue(0);

  const { scrollYProgress: rootScrollYProgress } = useScroll({ target: myNameWrapper });
  const { scrollYProgress } = useScroll({ target: aboutMeWrapper, offset: ["start 0.9", "start 0.25"] });

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);

    function handleMouseMove(e: MouseEvent) {
      const mouseX = (e.clientX / window.innerWidth).toFixed(2);
      const mouseY = (e.clientY / window.innerHeight).toFixed(2);
      mouseXValue.set(+mouseX);
      mouseYValue.set(+mouseY);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const x = useTransform(mouseXValue, [0, 1], [-MOVE_RANGE, MOVE_RANGE]);
  const y = useTransform(mouseYValue, [0, 1], [-MOVE_RANGE, MOVE_RANGE]);
  const ix = useTransform(mouseXValue, [0, 1], [MOVE_RANGE, -MOVE_RANGE]);
  const iy = useTransform(mouseYValue, [0, 1], [MOVE_RANGE, -MOVE_RANGE]);

  const scaleTransform = useTransform(rootScrollYProgress, [0, 1], [1, 0.9]);
  const blurTransform = useTransform(rootScrollYProgress, [0, 1], ["blur(0px)", "blur(3px)"]);
  const opacityTransform = useTransform(rootScrollYProgress, [0, 1], [1, 0.5]);

  const allWordsInAboutMe = useMemo(() => ABOUT_ME.split(" "), []);

  return (
    <section ref={myNameWrapper}>
      <motion.div
        className="h-dvh sticky top-0 left-0 flex justify-center items-end z-0"
        initial={{ scale: 1, filter: "blur(0px)", opacity: 1 }}
        style={{ scale: scaleTransform, filter: blurTransform, opacity: opacityTransform }}
      >
        <div className="w-full absolute top-[80%] lg:top-1/2 left-0 -translate-y-1/2">
          <motion.div initial={{ x: 0, y: 0 }} style={{ x, y }} className={LINEAR_EASE}>
            <h1 className="text-[4rem] sm:text-9xl xl:text-[13rem] 2xl:text-[15rem] uppercase font-black leading-[1] text-yellow-500">Chea</h1>
            <h1 className="text-[4rem] sm:text-9xl xl:text-[13rem] 2xl:text-[15rem] uppercase font-black leading-[1] text-yellow-500">Layhout</h1>
          </motion.div>
        </div>
        <motion.div initial={{ x: 0, y: 0 }} style={{ x: ix, y: iy }} className={cn("w-96 h-5/6 bg-red-500 relative", LINEAR_EASE)}></motion.div>
        <div className="w-full absolute top-[80%] lg:top-1/2 left-0 -translate-y-1/2 flex justify-between items-start">
          <motion.div initial={{ x: 0, y: 0 }} style={{ x, y }} className={LINEAR_EASE}>
            <h1 className="text-[4rem] sm:text-9xl xl:text-[13rem] 2xl:text-[15rem] uppercase font-black leading-[1] text-transparent [-webkit-text-stroke:3px_#eab308]">Chea</h1>
            <h1 className="text-[4rem] sm:text-9xl xl:text-[13rem] 2xl:text-[15rem] uppercase font-black leading-[1] text-transparent [-webkit-text-stroke:3px_#eab308]">Layhout</h1>
          </motion.div>
          <motion.div initial={{ x: 0, y: 0 }} className={cn("hidden lg:flex items-center gap-8", LINEAR_EASE)} style={{ x, y }}>
            <a href="https://www.linkedin.com/in/layhout-chea/" target="_blank">
              <Image src="/assets/svgs/linkedin.svg" width={32} height={0} alt="linkedin" />
            </a>
            <a href="https://t.me/layhout" target="_blank">
              <Image src="/assets/svgs/telegram.svg" width={32} height={0} alt="telegram" />
            </a>
            <a href="https://www.facebook.com/chea.layhout.79" target="_blank">
              <Image src="/assets/svgs/facebook.svg" width={32} height={0} alt="facebook" />
            </a>
          </motion.div>
        </div>
      </motion.div>
      <div className="h-dvh flex justify-center items-center flex-col relative z-[1]">
        <article className="max-w-7xl w-full text-center font-bold text-2xl md:text-3xl lg:text-5xl" ref={aboutMeWrapper}>
          <p className="flex flex-wrap justify-center gap-[1vw]">
            {allWordsInAboutMe.map((word, i) => {
              const start = i / allWordsInAboutMe.length;
              const end = start + 1 / allWordsInAboutMe.length;
              return (
                <Word key={i} progress={scrollYProgress} range={[start, end]}>
                  {word}
                </Word>
              );
            })}
          </p>
        </article>
      </div>
    </section>
  );
}

function Word({
  children,
  progress,
  range,
}: Readonly<{
  children: React.ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}>) {
  const opacityTransform = useTransform(progress, range, [0.2, 1]);
  const blurTransform = useTransform(progress, range, ["blur(2px)", "blur(0px)"]);

  return <motion.span style={{ opacity: opacityTransform, filter: blurTransform }}>{children}</motion.span>;
}
