import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Sectors from "./components/Sectors";
import Training from "./components/Training";
import Documents from "./components/Documents";
import Knowledge from "./components/Knowledge";
import Trust from "./components/Trust";
import ConsultationCTA from "./components/ConsultationCTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Sectors />
        <Training />
        <Documents />
        <Knowledge />
        <Trust />
        <ConsultationCTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
