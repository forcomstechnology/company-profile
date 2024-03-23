import { Button } from "react-bootstrap";
import "../style/hero.css";
import ornament from "../assets/ornament.svg";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="bg-light d-flex flex-col justify-content-center">
      <div className="container Hero">
        <motion.div
          layout
          transition={{ duration: 1, type: "spring", bounce: 0.5 }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="d-flex gap-3 flex-column align-items-center mx-auto"
        >
          <div className="header">
            <h1 className="hero-header text-center text-secondary">
              Our Comprehensive
            </h1>
            <h1 className="hero-header text-center text-primary">
              Software Solutions
            </h1>
          </div>
          <p className="hero-desc text-secondary">
            Discover how our expertise and dedication can transform your ideas
            into impactful realities.
          </p>
          <Button className="text-center" href="#services" variant="primary">
            Explore
          </Button>{" "}
        </motion.div>
        <Image className="hero-ornament" src={ornament} alt="" />
        <Image className="hero-ornament2" src={ornament} alt="" />
      </div>
    </div>
  );
}
