import { Button } from "react-bootstrap";
import "../style/about.css";
import image from "../assets/about.png";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <>
      <div id="about-us" className=" container d-flex about bg-light">
        <motion.div
          layout
          transition={{ duration: 1 }}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="about-copy"
        >
          <h1 className="about-header text-dark">
            Unlock Your Development Potential with Us
          </h1>
          <p className="about-desc text-dark">
            At our software house, we offer a range of services in web, mobile,
            and system development. With our expertise and dedication, we
            provide tailored solutions to meet your unique needs and help you
            achieve your goals.
          </p>
          <Button
            href="https://wa.me/6282138754680"
            target="_blank"
            rel="noreferrer"
            variant="primary"
          >
            Contact Us
          </Button>{" "}
        </motion.div>
        <motion.div
          fluid
          transition={{ duration: 1 }}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="about-image"
        >
          <Image src={image} alt="" />
        </motion.div>
      </div>
    </>
  );
}
