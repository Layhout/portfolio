"use client";

import { MY_PROJECTS } from "@/lib/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";

export default function Works() {
  useEffect(() => {
    const tiltingFXWrapper: NodeListOf<HTMLElement> = document.querySelectorAll(".tilting-wrapper");
    const tilt_strength = 0.07;

    const controller = new AbortController();

    if (!window.matchMedia("(any-hover: none)").matches) {
      tiltingFXWrapper.forEach(t => {
        t.addEventListener(
          "mousemove",
          function (e) {
            const selfProps = this.getBoundingClientRect();
            const mouseX = e.clientX - selfProps.x;
            const mouseY = e.clientY - selfProps.y;
            const halfX = this.scrollWidth / 2;
            const halfY = this.scrollHeight / 2;

            const tiltBody: HTMLElement | null = this.querySelector(".tilting-body");
            if (tiltBody) {
              tiltBody.style.transform = `perspective(800px) rotateY(${(halfX - mouseX) * -tilt_strength}deg) rotateX(${(halfY - mouseY) * tilt_strength}deg)`;
              tiltBody.style.transitionDuration = "0.1s";
            }

            const topLayer: HTMLElement | null = this.querySelector(".top-layer");
            if (topLayer) {
              topLayer.style.transform = `translate3d(${(mouseX / this.scrollWidth - 0.5) * 4}%, 0, 0) translate3d(0, ${(mouseY / this.scrollHeight - 0.5) * 4}%, 0)`;
              topLayer.style.transitionDuration = "0.1s";
            }
          },
          { signal: controller.signal }
        );

        t.addEventListener(
          "mouseleave",
          function (_) {
            this.querySelector(".tilting-body")?.removeAttribute("style");
            this.querySelector(".top-layer")?.removeAttribute("style");
          },
          { signal: controller.signal }
        );
      });
    }

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <section className="mb-14 relative">
      <div className="absolute -top-24 w-0 h-0 opacity-0" id="work_section" />
      <h1 className="section-title">Works</h1>
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
};

function Work({ image, description, link }: { image: string; description: string; link: string }) {
  return (
    <>
      <motion.div initial="hidden" whileInView="visible" variants={parentVariants} viewport={{ once: true, margin: "0px 0px -100px 0px" }} className="group hidden-on-mobile">
        <div className="tilting-wrapper">
          <div className="tilting-body">
            <Image src={image} alt="p1" width={1000} height={0} className="w-full" />
            <div className="top-layer">
              <p className="text-white">{description}</p>
              <div className="text-right">
                <a target="_blank" href={link} className="btn">
                  visit
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ scale: 0.8, filter: "blur(3px)", opacity: 0 }}
        whileInView={{ scale: 1, filter: "blur(0px)", opacity: 1, transition: { duration: 1 } }}
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        className="hidden-on-desktop overflow-hidden rounded-lg bg-white"
      >
        <Image src={image} alt="p1" width={1000} height={0} className="w-full rounded-lg" />
        <div className="p-4">
          <p className="text-sm dark:text-gray-700">{description}</p>
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
