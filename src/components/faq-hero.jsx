import { Button } from "react-bootstrap";
import "../style/hero.css";
import image from "../assets/faq-hero.svg";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="bg-light d-flex flex-col justify-content-center">
      <div className="container Hero d-flex justify-content-around">
        <motion.div
          layout
          transition={{ duration: 1, type: "spring", bounce: 0.5 }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="d-flex gap-3 flex-column align-items-start justify-content-start"
        >
          <div className="header">
            <h1 className="hero-header text-secondary">Frequently Asked</h1>
            <h1 className="hero-header text-primary">Question</h1>
          </div>
          <p className="hero-desc text-secondary">
            Find answers to common questions about our services and processes.
          </p>
          <Button className="text-center" href="#services" variant="primary">
            Explore
          </Button>{" "}
        </motion.div>
        <motion.div
          transition={{ duration: 1, type: "spring", bounce: 0.5 }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="faq-image"
        >
          <Image src={image} alt="" />
        </motion.div>
      </div>
    </div>
  );
}
