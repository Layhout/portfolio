import Contact from "@/components/Contact";
import EduAndExp from "@/components/EduAndExp";
import Hero from "@/components/Hero";
import MainNav from "@/components/MainNav";
import ProLang from "@/components/ProLang";
import Works from "@/components/Works";

export default function Home() {
  return (
    <main className="container">
      <MainNav />
      <Hero />
      <EduAndExp />
      <ProLang />
      <Works />
      <Contact />
    </main>
  );
}
