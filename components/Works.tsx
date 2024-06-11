"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useCallback, MouseEvent, useRef } from "react";

const MY_PROJECTS = [
  {
    image: "/assets/images/portfolio_1.jpg",
    description:
      "This is a group school project I completed with two other classmates. I took on the role of Developer, handling all the coding aspects. My teammates served as Director and Advisor, providing leadership and guidance throughout the process. The system we built is designed for restaurants situated near tourist destinations like waterfalls or beaches. Java served as the primary programming language for this project.",
    link: "https://drive.google.com/drive/folders/1R_nQDtgyQGGx6SQ5mo7k1eA0ySyUs6zG?usp=sharing",
  },
  {
    image: "/assets/images/portfolio_2.jpg",
    description:
      "After diving into HTML, CSS, and JavaScript, I discovered a particular fascination with CSS animation. To explore this interest further, I embarked on a personal project where I could apply everything I'd learned. The process was not only enjoyable, but it also led to a wealth of new discoveries.",
    link: "https://layhout.github.io/music_visualizer",
  },
  {
    image: "/assets/images/portfolio_3.jpg",
    description:
      "In this project, I brought together all the components I'd studied to create a system entirely from scratch.  I deliberately avoided using any third-party libraries, pushing myself to build everything myself.",
    link: "https://layhout.github.io/what-i-learned",
  },
];

export default function Works() {
  return (
    <section className="mb-14">
      <h1 className="section-title">Programming Languages</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 items-start mb-16 mt-8">
        {MY_PROJECTS.map(project => (
          <Work key={project.image} {...project} />
        ))}
      </div>
    </section>
  );
}

const parentVariants = {
  hidden: { scale: 0.8, filter: "blur(3px)", opacity: 0, transition: { duration: 1 } },
  visible: { scale: 1, filter: "blur(0px)", opacity: 1, transition: { duration: 1 } },
  hover: { scale: 1.05, transition: { duration: 0.7 } },
};

const childVariants = { hover: { opacity: 1, transition: { duration: 0.7 } } };

function Work({ image, description, link }: { image: string; description: string; link: string }) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const handleMouseMove = useCallback(
    (e: MouseEvent<HTMLElement>) => {
      if (!wrapperRef.current) return;

      const rect = wrapperRef.current.getBoundingClientRect();

      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      const rx = mouseX / rect.width - 0.5;
      const ry = mouseY / rect.height - 0.5;

      x.set(rx);
      y.set(ry);
    },
    [x, y]
  );

  const handleMouseLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);
  const tranX = useTransform(mouseXSpring, [-0.5, 0.5], ["-2%", "2%"]);
  const tranY = useTransform(mouseYSpring, [-0.5, 0.5], ["-2%", "2%"]);

  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        whileHover="hover"
        variants={parentVariants}
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        ref={wrapperRef}
        onMouseMoveCapture={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group hidden-on-mobile"
      >
        <motion.div
          style={{ transformStyle: "preserve-3d", rotateX, rotateY, transformPerspective: 800 }}
          className="overflow-hidden rounded-lg relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-transparent group-hover:after:bg-black/70 after:z-[1] after:transition-all after:duration-700"
        >
          <Image src={image} alt="p1" width={1000} height={0} className="w-full" />
          <motion.div initial={{ opacity: 0 }} variants={childVariants} style={{ x: tranX, y: tranY }} className="absolute top-0 left-0 w-full h-full p-4 flex flex-col justify-between z-[2]">
            <p className="text-white text-sm">{description}</p>
            <div className="text-right">
              <a target="_blank" href={link} className="btn">
                visit
              </a>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ scale: 0.8, filter: "blur(3px)", opacity: 0 }}
        whileInView={{ scale: 1, filter: "blur(0px)", opacity: 1, transition: { duration: 1 } }}
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        className="hidden-on-desktop overflow-hidden rounded-lg bg-white"
      >
        <Image src={image} alt="p1" width={1000} height={0} className="w-full rounded-lg" />
        <div className="p-4">
          <p className="text-sm">{description}</p>
          <div className="text-right">
            <a target="_blank" href={link} className="btn">
              visit
            </a>
          </div>
        </div>
      </motion.div>
    </>
  );
}
