/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useMemo, useRef } from "react";
import { motion, MotionValue, useMotionValue, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { FaExternalLinkAlt, FaFacebook } from "react-icons/fa";
import { FaLinkedin, FaTelegram } from "react-icons/fa6";
import { ABOUT_ME, easeOutQuart, LINEAR_EASE } from "@/lib/constants";

export default function Hero() {
  const aboutMeWrapper = useRef<HTMLElement>(null);
  const myNameWrapper = useRef<HTMLElement>(null);

  const { scrollYProgress: rootScrollYProgress } = useScroll({ target: myNameWrapper });
  const { scrollYProgress } = useScroll({ target: aboutMeWrapper, offset: ["start 0.9", "start 0.25"] });

  useEffect(() => {
    if (window.matchMedia("(any-hover: none)").matches) return;

    const allDFX: NodeListOf<HTMLElement> = document.querySelectorAll(".drag-fx");
    const allIDFX: NodeListOf<HTMLElement> = document.querySelectorAll(".drag-inv-fx");

    const controller = new AbortController();

    document.addEventListener(
      "mousemove",
      function (e) {
        const move_x = window.innerWidth / 2 - e.clientX;
        const move_y = window.innerHeight / 2 - e.clientY;
        allDFX.forEach(a => {
          a.style.transform = `translate3d(${-(move_x * 0.02)}px, ${-(move_y * 0.05)}px, 0)`;
        });
        allIDFX.forEach(a => {
          a.style.transform = `translate3d(${move_x * 0.02}px, ${move_y * 0.05}px, 0)`;
        });
      },
      { signal: controller.signal }
    );

    return () => {
      controller.abort();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const scaleTransform = useTransform(rootScrollYProgress, [0, 1], [1, 0.9]);
  const blurTransform = useTransform(rootScrollYProgress, [0, 1], ["blur(0px)", "blur(4px)"]);
  const opacityTransform = useTransform(rootScrollYProgress, [0, 1], [1, 0.4]);

  const allWordsInAboutMe = useMemo(() => ABOUT_ME.split(" "), []);

  return (
    <section ref={myNameWrapper} id="about_section">
      <motion.div
        className="h-screen sticky top-0 left-0 flex justify-center items-end z-0"
        initial={{ scale: 1, filter: "blur(0px)", opacity: 1 }}
        style={{ scale: scaleTransform, filter: blurTransform, opacity: opacityTransform }}
      >
        <div className="w-full absolute top-[80%] lg:top-1/2 left-0 -translate-y-1/2">
          <motion.div
            initial={{ y: 50, filter: "blur(10px)", opacity: 0 }}
            animate={{ y: 0, filter: "blur(0px)", opacity: 1 }}
            transition={{ duration: 1.5, delay: 3, ease: easeOutQuart }}
            className={LINEAR_EASE}
          >
            <h1 className="text-[4rem] sm:text-9xl xl:text-[13rem] 2xl:text-[15rem] uppercase font-black leading-[1] text-yellow-500 drag-fx">Chea</h1>
            <h1 className="text-[4rem] sm:text-9xl xl:text-[13rem] 2xl:text-[15rem] uppercase font-black leading-[1] text-yellow-500 drag-fx">Layhout</h1>
          </motion.div>
        </div>
        <motion.div
          initial={{ y: 50, filter: "blur(10px)", opacity: 0 }}
          animate={{ y: 0, filter: "blur(0px)", opacity: 1 }}
          transition={{ duration: 2, delay: 2.5, ease: easeOutQuart }}
          className={cn("h-[90vh] relative", LINEAR_EASE)}
        >
          <img src="/assets/images/me.png" alt="That's me" className="h-full object-contain object-bottom fade-mask drag-inv-fx" />
        </motion.div>
        <div className="w-full absolute top-[80%] lg:top-1/2 left-0 -translate-y-1/2 flex justify-between items-start">
          <motion.div
            initial={{ y: 50, filter: "blur(10px)", opacity: 0 }}
            animate={{ y: 0, filter: "blur(0px)", opacity: 1 }}
            transition={{ duration: 1.5, delay: 3, ease: easeOutQuart }}
            className={LINEAR_EASE}
          >
            <h1 className="text-[4rem] sm:text-9xl xl:text-[13rem] 2xl:text-[15rem] uppercase font-black leading-[1] text-transparent [-webkit-text-stroke:3px_#eab308] drag-fx">Chea</h1>
            <h1 className="text-[4rem] sm:text-9xl xl:text-[13rem] 2xl:text-[15rem] uppercase font-black leading-[1] text-transparent [-webkit-text-stroke:3px_#eab308] drag-fx">Layhout</h1>
          </motion.div>
          <motion.div
            initial={{ y: 50, filter: "blur(10px)", opacity: 0 }}
            animate={{ y: 0, filter: "blur(0px)", opacity: 1 }}
            transition={{ duration: 1.5, delay: 3, ease: easeOutQuart }}
            className={cn("hidden lg:flex items-center gap-8", LINEAR_EASE)}
          >
            <a href="https://www.linkedin.com/in/layhout-chea/" target="_blank" className="drag-fx">
              <FaLinkedin className="w-8 h-8" />
            </a>
            <a href="https://t.me/layhout" target="_blank" className="drag-fx">
              <FaTelegram className="w-8 h-8" />
            </a>
            <a href="https://www.facebook.com/chea.layhout.79" target="_blank" className="drag-fx">
              <FaFacebook className="w-8 h-8" />
            </a>
          </motion.div>
        </div>
      </motion.div>
      <div className="h-screen flex justify-center items-center flex-col relative z-[1] gap-12">
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
        <motion.a
          initial={{ scale: 0.8, filter: "blur(3px)", opacity: 0 }}
          whileInView={{ scale: 1, filter: "blur(0px)", opacity: 1, transition: { duration: 1 } }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          href="/assets/pdf/my_cv.pdf"
          download="Layhout Chea CV"
          className="btn flex items-center gap-2"
          target="_blank"
        >
          &emsp;View CV <FaExternalLinkAlt className="h-3 w-3 inline-block" />
          &emsp;
        </motion.a>
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
