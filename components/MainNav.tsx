"use client";

import { useLenis } from "@studio-freight/react-lenis/types";
import { Moon, Sun } from "lucide-react";
import Image from "next/image";
import { useEffect, useMemo, useRef } from "react";

export default function MainNav() {
  //   const lenis = useLenis();
  const navRef = useRef<HTMLElement>(null);

  const links = useMemo(
    () => [
      {
        link: "about_section",
        name: "About",
      },
      {
        link: "ee_section",
        name: "Edu & Exp",
      },
      {
        link: "skill_section",
        name: "Skill",
      },
      {
        link: "work_section",
        name: "Work",
      },
      {
        link: "contact_section",
        name: "Contacts",
      },
    ],
    []
  );

  useEffect(() => {
    const nav = navRef.current!;
    const navBtn = nav.querySelector("#nav_btn")!;
    const navLinkContainer = nav.querySelector<HTMLElement>("#nav_links")!;
    const navLinks = navLinkContainer.querySelectorAll<HTMLElement>("li")!;
    const themeBtn = nav.querySelector<HTMLElement>("#theme_btn")!;

    let onScreenSection = 0;

    navBtn.addEventListener("click", openNav);

    function openNav() {
      if (nav.dataset.open === "false") {
        nav.dataset.open = "true";
        navLinks.forEach((l, i) => (l.style.transitionDelay = `${i * 0.09 + 0.1}s`));
        navLinks[navLinks.length - 1].addEventListener(
          "transitionend",
          () => {
            if (nav.dataset.open === "true") navLinkContainer.style.setProperty("--ele-opacity", "1");
          },
          { once: true }
        );
      } else {
        nav.dataset.open = "false";
        navLinks.forEach((l, i) => (l.style.transitionDelay = `${i * 0.09}s`));
        navLinkContainer.style.setProperty("--ele-opacity", "0");
      }
    }

    themeBtn.addEventListener("click", changeThemes);

    function changeThemes() {
      const theme = themeBtn.dataset.theme === "light" ? "dark" : "light";
      themeBtn.dataset.theme = theme;
      document.body.dataset.theme = theme;
      localStorage.setItem("theme", theme);
    }

    function setNavLinksHoverFX(x: number, y: number, width: number, height: number) {
      navLinkContainer.style.setProperty("--ele-pos-x", `${x}px`);
      navLinkContainer.style.setProperty("--ele-pos-y", `${y}px`);
      navLinkContainer.style.setProperty("--ele-width", `${width}px`);
      navLinkContainer.style.setProperty("--ele-height", `${height}px`);
    }

    setNavLinksHoverFX(navLinks[onScreenSection].offsetLeft, navLinks[onScreenSection].offsetTop, navLinks[onScreenSection].scrollWidth, navLinks[onScreenSection].scrollHeight);

    navLinks.forEach((l, i) => {
      l.onclick = () => {
        // lenis?.scrollTo(`#${l.dataset.section}`, { offset: -100 });
        onScreenSection = i;
        openNav();
      };
    });

    // window.addEventListener("scroll", function (e) {
    //     allSections.forEach((as, i) => {
    //       const { y, height } = as.getBoundingClientRect();
    //       const middleScreen = document.documentElement.clientHeight / 2;
    //       if (middleScreen > y && middleScreen < y + height) {
    //         onScreenSection = i;
    //         setNavLinksHoverFX(navLinks[onScreenSection].offsetLeft, navLinks[onScreenSection].offsetTop, navLinks[onScreenSection].scrollWidth, navLinks[onScreenSection].scrollHeight);
    //       }
    //     });

    //     allAos.forEach(aos => {
    //       const { y } = aos.getBoundingClientRect();
    //       const showPoint = document.documentElement.clientHeight - 150;
    //       if (showPoint > y && !aos.classList.toString().includes("aos")) {
    //         switch (aos.dataset.aos) {
    //           case "fade-in":
    //             aos.classList.add("aos-fade-in");
    //             break;
    //           case "slide-in-left":
    //             aos.classList.add("aos-slide-in-left");
    //             break;
    //         }
    //       }
    //     });
    //   });

    return () => {
      navBtn.removeEventListener("click", openNav);
      themeBtn.removeEventListener("click", changeThemes);
      navLinks.forEach(l => (l.onclick = null));
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className="p-2 rounded-xl backdrop-blur-sm bg-white/60 fixed top-4 left-1/2 -translate-x-1/2 transition-all duration-700 delay-500 z-[9999] w-[300px] data-[open=true]:delay-0 data-[open=true]:w-[768px] group transform-gpu"
      data-open="false"
    >
      <div className="flex justify-between items-center">
        <button className="bg-primary-500 w-12 h-12 flex justify-center items-center rounded-lg" id="nav_btn" type="button">
          <div className="relative transition-all duration-700 w-2/5 group-data-[open=true]:-rotate-180 ">
            <span className="absolute w-full h-0.5 transition-all duration-700 bg-black left-0 top-0 -translate-y-1 group-data-[open=true]:translate-y-0 group-data-[open=true]:rotate-45"></span>
            <span className="absolute w-1/2 h-0.5 transition-all duration-700 bg-black left-0 top-0 translate-y-1 group-data-[open=true]:translate-y-0 group-data-[open=true]:-rotate-45 group-data-[open=true]:w-full"></span>
          </div>
        </button>
        <div className="overflow-hidden ">
          <Image
            src="/assets/images/CLH.png"
            alt="my logo"
            id="my_logo"
            width={50}
            height={0}
            className="transition-transform duration-500 delay-500 group-data-[open=true]:-translate-y-[110%] group-data-[open=true]:delay-0"
          />
        </div>
        <button className="bg-zinc-200 w-12 h-12 rounded-lg relative overflow-hidden" id="theme_btn" data-theme="light" type="button">
          <div className="absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-between items-center transition-all duration-700 text-black h-full dark:rotate-180">
            <Moon className="w-4 h-4 -translate-y-1/2" />
            <Sun className="w-4 h-4 rotate-180 translate-y-1/2" />
          </div>
        </button>
      </div>
      <ul className="flex items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden -z-[1] group-data-[open=true]:z-[1]" id="nav_links">
        {links.map(({ link, name }, i) => (
          <li
            data-section={link}
            key={i}
            className="transition-transform duration-700 cursor-pointer translate-y-full px-2 py-[18px] whitespace-nowrap hover:underline group-data-[open=true]:translate-y-0"
          >
            {name}
          </li>
        ))}
      </ul>
    </nav>
  );
}
