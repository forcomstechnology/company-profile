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
            Let&apos;s Take the Next Step Together!
          </h1>
          <p className="services-desc text-secondary text-center">
            Get in touch with us today to start your digital journey. Whether
            you&apos;re looking to revamp your website, develop a mobile app, or
            streamline your operations with custom software, we&apos;re here to
            make it happen. Drop us a line and let&apos;s make magic together!
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
