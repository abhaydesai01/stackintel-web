import Features from "@/Components/Features";
import Footer from "@/Components/Footer";
import Hero from "@/Components/Hero";
import Mid from "@/Components/Mid";
import Navbar from "@/Components/Navbar";
import Section from "@/Components/Section";
import Offers from "@/Components/Offers";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Mid />
      <Section />
      <Offers />
      <Features />
      <Footer />
    </div>
  );
}
