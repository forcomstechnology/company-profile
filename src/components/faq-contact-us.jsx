import '../style/services.css';
import { motion } from 'framer-motion';
import { Button } from 'react-bootstrap';
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

export default function Services() {
  return (
    <>
      <div
        id="our-services"
        className="container services d-flex flex-column p-5"
      >
        <motion.div
          variants={componentsAnimation}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="services-copy"
        >
          <h1 className="services-header text-secondary">
            Didn&apos;t find your answer?
          </h1>
          <p className="services-desc text-secondary text-center">
            let us know what you’ve been asking for.
          </p>
        </motion.div>
        <Button
          href="https://wa.me/6282138754680"
          target="_blank"
          rel="noreferrer"
          variant="primary"
          className="m-auto"
          style={{ width: 232 }}
        >
          Get in touch
        </Button>
      </div>
    </>
  );
}
