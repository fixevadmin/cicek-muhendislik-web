import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
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
