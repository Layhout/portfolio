"use client";

import { LuCalendarDays, LuMapPin } from "react-icons/lu";
import { motion } from "framer-motion";

const MY_EDU = [
  {
    title: "High School",
    location: "Hun sen borey 100 knong",
    date: "2018",
  },
  {
    title: "Computer Science",
    location: "Royal University of Phnom penh",
    date: "2018 - 2022",
  },
  {
    title: "Java Training",
    location: "ETEC Center",
    date: "2019 - 2020",
  },
  {
    title: "Web Development",
    location: "ETEC Center",
    date: "2021 - 2022",
  },
  {
    title: "Master of IT Engineering",
    location: "Royal University of Phnom penh",
    date: "2023 - Present",
  },
];

const MY_EXP = [
  {
    title: "Software Developer",
    location: "A9 Online",
    date: "Jun 2021 - Sep 2021",
  },
  {
    title: "Software and App Developer",
    location: "Zando Cambodia",
    date: "2021 - 2023",
  },
  {
    title: "Frontend Developer",
    location: "Wing Bank",
    date: "2023 - Present",
  },
];

export default function EduAndExp() {
  return (
    <section className="flex gap-4 md:flex-row flex-col mb-14" id="ee_section">
      <div className="flex-1">
        <h1 className="section-title">Education</h1>
        <div className="my-8 flex flex-col gap-2 fade-mask">
          {MY_EDU.map(edu => (
            <EItem key={edu.title} {...edu} />
          ))}
        </div>
      </div>
      <div className="flex-1">
        <h1 className="section-title">Experience</h1>
        <div className="my-8 flex flex-col gap-2 fade-mask">
          {MY_EXP.map(edu => (
            <EItem key={edu.title} {...edu} />
          ))}
        </div>
      </div>
    </section>
  );
}

function EItem({ title, location, date }: { title: string; location: string; date: string }) {
  return (
    <div className="flex gap-12 ml-5">
      <div className="w-0.5 bg-dash [--line-color:#374151] dark:[--line-color:#d1d5db] mt-8 relative">
        <div className="absolute top-0 left-px w-8 h-8 -translate-x-1/2 -translate-y-full rounded-full border-2 border-dashed border-gray-700 dark:border-gray-300 after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:bg-yellow-400 after:w-4 after:h-4" />
      </div>
      <motion.div
        className="pb-12"
        initial="hidden"
        whileInView="visible"
        variants={{ hidden: { scale: 0.8, filter: "blur(3px)", opacity: 0, transition: { duration: 1 } }, visible: { scale: 1, filter: "blur(0px)", opacity: 1, transition: { duration: 1 } } }}
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      >
        <h1 className="mb-1 text-xl md:text-2xl font-bold">{title}</h1>
        <h2 className="mb-1 font-normal">
          <LuMapPin className="h-4 w-4 inline-block" /> &ensp; {location}
        </h2>
        <h2 className="mb-1 font-normal">
          <LuCalendarDays className="h-4 w-4 inline-block" /> &ensp; {date}
        </h2>
      </motion.div>
    </div>
  );
}