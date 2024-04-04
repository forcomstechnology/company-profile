"use client";
import React from "react";
import PortofolioHero from "../../components/portofolio-hero";
import PortofolioBody from "../../components/portofolio-body";
import NavigationBar from "../../components/navbar.jsx";
import Contact from "../../components/contact-us.jsx";
import Footer from "../../components/footer-2.jsx";
import "../custom.scss";

export default function page() {
  return (
    <div>
      <NavigationBar />
      <PortofolioHero />
      <PortofolioBody />
      <Contact />
      <Footer />
    </div>
  );
}
