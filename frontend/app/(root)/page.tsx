import About from "@/components/landingPage/About";
import Hero from "@/components/landingPage/Hero";
import Services from "@/components/landingPage/Services";
import Subscription from "@/components/landingPage/Subscription";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import Toolbar from "@/components/shared/Toolbar";

export default function Home() {
  return (
    <>
      <Toolbar />
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Subscription />
      <Footer />
    </>
  );
}
