"use client";
import NavigationBar from "../components/navbar.jsx";
import Hero from "../components/hero.jsx";
import About from "../components/about.jsx";
import Services from "../components/services.jsx";
import Contact from "../components/contact-us.jsx";
import Footer from "../components/footer-2.jsx";
import Faq from "../components/faq.jsx";
import "./custom.scss";

export default function Home() {
  return (
    <>
      <NavigationBar />
      <Hero />
      <About />
      <Services />
      <Faq />
      <Contact />
      <Footer />
    </>
  );
}
