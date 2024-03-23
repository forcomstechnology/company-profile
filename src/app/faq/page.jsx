"use client";
import NavigationBar from "../../components/navbar-light.jsx";
import Hero from "../../components/faq-hero.jsx";
import Footer from "../../components/footer-2.jsx";
import Faq from "../../components/faq-faq.jsx";
import Contact from "../../components/faq-contact-us.jsx";
import "../custom.scss";

function FaqPage() {
  return (
    <>
      <NavigationBar />
      <Hero />
      <Faq />
      <Contact />
      <Footer />
    </>
  );
}

export default FaqPage;
