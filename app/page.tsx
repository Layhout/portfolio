import EduAndExp from "@/components/EduAndExp";
import Hero from "@/components/Hero";
import MainNav from "@/components/MainNav";

export default function Home() {
  return (
    <main className="container">
      <MainNav />
      <Hero />
      <EduAndExp />
    </main>
  );
}
