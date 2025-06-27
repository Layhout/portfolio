import Contact from "@/components/Contact";
import EduAndExp from "@/components/EduAndExp";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import MainNav from "@/components/MainNav";
import ProLang from "@/components/ProLang";
import Works from "@/components/Works";
import { MyData } from "@/lib/constants";

async function getData(): Promise<MyData | null> {
  const res = await fetch("https://raw.githubusercontent.com/Layhout/assets/refs/heads/main/jsons/data.json", { cache: "no-cache" });

  if (!res.ok) {
    return null;
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();

  return (
    <main className="container">
      <MainNav />
      <Hero aboutMe={data?.aboutMe || ""} socialLinks={data?.socialLinks || []} />
      <EduAndExp myEdus={data?.myEdus || []} myExps={data?.myExps || []} />
      <ProLang myLibSkills={data?.myLibSkills || []} mySkills={data?.mySkills || []} />
      <Works myProjects={data?.myProjects || []} />
      <Contact socialLinks={data?.socialLinks || []} />
      <Intro />
    </main>
  );
}
