"use client";

import { easeOutQuart } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const MY_SKILLS = [
  {
    name: "HTML",
    capacity: "w-[90%]",
    bgColor: "[--bg-c:#ffdbcc]",
    fgColor: "to-[#f06529]",
  },
  {
    name: "CSS",
    capacity: "w-[90%]",
    bgColor: "[--bg-c:#ccdbff]",
    fgColor: "to-[#2965f1]",
  },
  {
    name: "Javascript",
    capacity: "w-[90%]",
    bgColor: "[--bg-c:#fff9cc]",
    fgColor: "to-[#f7df1f]",
  },
  {
    name: "Typescript",
    capacity: "w-[80%]",
    bgColor: "[--bg-c:#cce5ff]",
    fgColor: "to-[#3075c0]",
  },
  {
    name: "PHP",
    capacity: "w-[50%]",
    bgColor: "[--bg-c:#cccfff]",
    fgColor: "to-[#7478af]",
  },
  {
    name: "Java",
    capacity: "w-[50%]",
    bgColor: "[--bg-c:#ffcccd]",
    fgColor: "to-[#e61f23]",
  },
  {
    name: "C",
    capacity: "w-[40%]",
    bgColor: "[--bg-c:#cce6ff]",
    fgColor: "to-[#6196cc]",
  },
  {
    name: "C++",
    capacity: "w-[50%]",
    bgColor: "[--bg-c:#cce6ff]",
    fgColor: "to-[#6196cc]",
  },
  {
    name: "Python",
    capacity: "w-[50%]",
    bgColor: "[--bg-c:#fff4cc]",
    fgColor: "to-[#FFD43B]",
  },
  {
    name: "Golang",
    capacity: "w-[50%]",
    bgColor: "[--bg-c:#ccf5ff]",
    fgColor: "to-[#00add8]",
  },
  {
    name: "SQL",
    capacity: "w-[60%]",
    bgColor: "[--bg-c:#ccebff]",
    fgColor: "to-[#5a839d]",
  },
  {
    name: "Dart",
    capacity: "w-[60%]",
    bgColor: "[--bg-c:#ccf5ff]",
    fgColor: "to-[#00add8]",
  },
];

const MY_LIBS_SKILLS = [
  {
    name: "React js",
    capacity: "w-[90%]",
    bgColor: "[--bg-c:#ccf5ff]",
    fgColor: "to-[#61DBFB]",
  },
  {
    name: "Next js",
    capacity: "w-[90%]",
    bgColor: "[--bg-c:#d6d6d6]",
    fgColor: "to-[#030303]",
  },
  {
    name: "Vue js",
    capacity: "w-[50%]",
    bgColor: "[--bg-c:#ccffe8]",
    fgColor: "to-[#41B883]",
  },
  {
    name: "React Native",
    capacity: "w-[90%]",
    bgColor: "[--bg-c:#ccf5ff]",
    fgColor: "to-[#61DBFB]",
  },
  {
    name: "Node js",
    capacity: "w-[60%]",
    bgColor: "[--bg-c:#d0ffcc]",
    fgColor: "to-[#68a063]",
  },
  {
    name: "Tailwind CSS",
    capacity: "w-[90%]",
    bgColor: "[--bg-c:#ccefff]",
    fgColor: "to-[#36b7f1]",
  },
  {
    name: "SASS",
    capacity: "w-[60%]",
    bgColor: "[--bg-c:#ffcce6]",
    fgColor: "to-[#cc6699]",
  },
  {
    name: "Firebase",
    capacity: "w-[50%]",
    bgColor: "[--bg-c:#ffe6cc]",
    fgColor: "to-[#f5820d]",
  },
  {
    name: "Bootstrap",
    capacity: "w-[50%]",
    bgColor: "[--bg-c:#e4ccff]",
    fgColor: "to-[#7c12f9]",
  },
  {
    name: "Material UI",
    capacity: "w-[40%]",
    bgColor: "[--bg-c:#cce3ff]",
    fgColor: "to-[#157fff]",
  },
  {
    name: "Vuetify",
    capacity: "w-[40%]",
    bgColor: "[--bg-c:#cce5ff]",
    fgColor: "to-[#1664ba]",
  },
  {
    name: "Mongodb",
    capacity: "w-[40%]",
    bgColor: "[--bg-c:#ccffda]",
    fgColor: "to-[#2ced64]",
  },
  {
    name: "Framer Motion",
    capacity: "w-[60%]",
    bgColor: "[--bg-c:#d6d6d6]",
    fgColor: "to-[#030303]",
  },
  {
    name: "shadcn/ui",
    capacity: "w-[80%]",
    bgColor: "[--bg-c:#d6d6d6]",
    fgColor: "to-[#030303]",
  },
  {
    name: "Ant Design",
    capacity: "w-[60%]",
    bgColor: "[--bg-c:#cce0ff]",
    fgColor: "to-[#0c69ff]",
  },
  {
    name: "Flutter",
    capacity: "w-[50%]",
    bgColor: "[--bg-c:#ccf5ff]",
    fgColor: "to-[#00add8]",
  },
];

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
      className={cn(
        "relative rounded-xl py-4 px-6 overflow-hidden shadow-none dark:shadow-[inset_0_0_10px_3px] shadow-transparent dark:shadow-[var(--bg-c,white)] bg-[var(--bg-c,white)] dark:bg-transparent",
        bgColor
      )}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        className={cn("absolute top-0 left-0 h-full rounded-xl bg-gradient-to-r from-transparent", fgColor, capacity)}
        variants={{ hidden: { x: "-100%", transition: { duration: 1.3, ease: easeOutQuart } }, visible: { x: "0%", transition: { duration: 1.3, ease: easeOutQuart } } }}
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      />
      <h1 className="relative text-2xl font-bold">{name}</h1>
    </div>
  );
}
