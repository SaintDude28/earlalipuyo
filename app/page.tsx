import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Software from "@/components/Software";
import Certifications from "@/components/Certifications";
import PortfolioTabs from "@/components/PortfolioTabs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />

      <Hero />

      <About />

      <Services />

      <Software />

      <Certifications />

      <PortfolioTabs />

      <Contact />

      <Footer />
    </main>
  );
}