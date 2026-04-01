import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Comparison from "@/components/Comparison";
import HowItWorks from "@/components/HowItWorks";
import TechnicalSpecs from "@/components/TechnicalSpecs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

export default function Home() {
  return (
    <>
      <JsonLd />
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Hero />
          <Features />
          <Comparison />
          <HowItWorks />
          <TechnicalSpecs />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
