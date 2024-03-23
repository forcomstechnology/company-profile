import { Button } from "react-bootstrap";
import "../style/hero.css";
import ornament from "../assets/ornament.svg";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="bg-secondary">
      <div className="container Hero">
        <motion.div
          layout
          transition={{ duration: 1, type: "spring", bounce: 0.5 }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="hero-copy"
        >
          <div className="header">
            <h1 className="hero-header text-primary">Inspiring</h1>
            <h1 className="hero-header text-light">Digital Innovation</h1>
          </div>
          <p className="hero-desc text-light">
            Innovative Software House to Bring Your Ideas to Life. We are your
            trusted partner in web, mobile, and software development.
          </p>
          <Button href="#about-us" variant="primary">
            Dive In
          </Button>{" "}
        </motion.div>
        <Image className="hero-ornament" src={ornament} alt="" />
      </div>
    </div>
  );
}
