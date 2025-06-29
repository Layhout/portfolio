"use client";

import { SocialLink } from "@/lib/constants";
import { useCallback } from "react";

export default function Contact({ socialLinks }: { socialLinks: SocialLink[] }) {
  const copyToClipboard = useCallback((id: string) => {
    const li = document.getElementById(id);

    const contents = li?.querySelector("span");

    navigator.clipboard.writeText(contents?.textContent || "");

    const button = li?.querySelector("button");

    if (!button) return;

    button.innerHTML = "Copied!";

    setTimeout(() => {
      button.innerHTML = "Copy";
    }, 2000);
  }, []);

  return (
    <section className="flex flex-col relative">
      <div className="absolute -top-24 w-0 h-0 opacity-0" id="contact_section" />
      <h1 className="section-title">Contacts</h1>
      <div className="flex-1 flex pt-8 pb-20 xl:pt-0 xl:pb-0 lg:items-center mt-8 mb-16">
        <div className="flex-1 flex flex-col gap-20 xl:flex-row xl:gap-0 justify-between">
          <ul className="flex flex-col justify-between gap-12 xl:gap-0 font-black">
            <li onClick={() => copyToClipboard("contact-email")} className="text-gray-400 cursor-pointer group flex justify-between items-center" id="contact-email">
              <span className="text-xl sm:text-3xl">layhoutchea79@gmail.com</span>
              <button className="opacity-0 group-hover:opacity-100 font-normal" id="copy-btn">
                Copy
              </button>
            </li>
            <li onClick={() => copyToClipboard("contact-phone")} className="text-gray-400 cursor-pointer group flex justify-between items-center" id="contact-phone">
              <span className="text-xl sm:text-3xl">+855 96 336 9000</span>
              <button className="opacity-0 group-hover:opacity-100 font-normal" id="copy-btn">
                Copy
              </button>
            </li>
            <li className="text-xl sm:text-3xl text-gray-400">Based in Phnom Penh, Cambodia.</li>
          </ul>
          <ul className="grid grid-cols-[repeat(2,auto)] justify-between text-3xl lg:grid-cols-[repeat(3,auto)] sm:text-5xl font-black gap-y-20 gap-x-0 lg:gap-8 xl:gap-12 2xl:gap-20">
            {socialLinks.map(({ link, name }, i) => (
              <li key={i}>
                <a href={link} className="hover:underline">
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
