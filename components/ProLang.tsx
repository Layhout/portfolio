"use client";

import { easeOutQuart, MY_LIBS_SKILLS, MY_SKILLS } from "@/lib/constants";
import { motion } from "framer-motion";
import { CSSProperties } from "react";

export default function ProLang() {
  return (
    <section className="mb-14" id="skill_section">
      <h1 className="section-title">Programming Languages</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 items-start mb-16 mt-8">
        {MY_SKILLS.map(skill => (
          <Skill key={skill.name} {...skill} />
        ))}
      </div>
      <h1 className="section-title">Libraries / Frameworks</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 items-start mb-16 mt-8">
        {MY_LIBS_SKILLS.map(skill => (
          <Skill key={skill.name} {...skill} />
        ))}
      </div>
    </section>
  );
}

function Skill({ name, capacity, bgColor, fgColor }: { name: string; capacity: string; bgColor: string; fgColor: string }) {
  return (
    <div
      className="relative rounded-xl py-4 px-6 overflow-hidden shadow-none dark:shadow-[inset_0_0_10px_3px] shadow-transparent dark:shadow-[var(--bg-c,white)] bg-[var(--bg-c,white)] dark:bg-transparent"
      style={{ "--bg-c": bgColor } as CSSProperties}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        className="absolute top-0 left-0 h-full rounded-xl"
        variants={{ hidden: { x: "-100%", transition: { duration: 1.3, ease: easeOutQuart } }, visible: { x: "0%", transition: { duration: 1.3, ease: easeOutQuart } } }}
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        style={{ backgroundImage: `linear-gradient(to right, transparent, ${fgColor})`, width: capacity }}
      />
      <h1 className="relative text-2xl font-bold">{name}</h1>
    </div>
  );
}
