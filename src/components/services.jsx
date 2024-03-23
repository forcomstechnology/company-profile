import "../style/services.css";
import web from "../assets/icons/desktop.svg";
import mobile from "../assets/icons/mobile.svg";
import cpu from "../assets/icons/CPU.svg";
import right from "../assets/icons/right.svg";
import { motion } from "framer-motion";
import Image from "next/image";

const componentsAnimation = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

const servicesProvided = [
  {
    id: 1,
    icon: web,
    name: "Web Development",
    desc: "With a website, your business could be improved by having a stronger brand-awareness, reaching more market like never before",
  },
  {
    id: 2,
    icon: mobile,
    name: "Mobile Development",
    desc: "With an app, your business could be enabled and scaled infinitely as onboarding customers via app is much more scalable.",
  },
  {
    id: 3,
    icon: cpu,
    name: "System Development",
    desc: "With a system, your business processes could be automated and streamlined, resulting in a reduced cost, and higher net-profits.",
  },
];

export default function Services() {
  return (
    <>
      <div id="our-services" className="container services d-flex flex-column">
        <motion.div
          variants={componentsAnimation}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="services-copy"
        >
          <h1 className="services-header text-secondary">Our Services</h1>
          <p className="services-desc text-secondary">
            We offer comprehensive web, mobile, and system development services.
          </p>
        </motion.div>
        <div className="services-card d-flex flex-row">
          {servicesProvided.map((service, index) => (
            <motion.div
              variants={componentsAnimation}
              initial="initial"
              whileInView="animate"
              key={index}
              viewport={{ once: true }}
              transition={{ delay: 0.4 * index }}
              className="cards"
            >
              <div className="cards-header">
                <Image src={service.icon} alt="service" />
                <h2 className="headers text-primary">{service.name}</h2>
              </div>
              <p className="card-desc">{service.desc}</p>
              <motion.a
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="btn-services"
                href="/services"
                style={{ textDecoration: "none" }}
              >
                Learn More <Image src={right} alt="" />
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
