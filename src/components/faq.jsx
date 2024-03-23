import { Accordion } from 'react-bootstrap';
import { motion } from 'framer-motion';
import '../style/faq.css';

function Faq() {
  return (
    <div className="container d-flex justify-content-center faq-section d-flex flex-row">
      <div className="faq">
        <motion.div
          initial={{ opacity: 0, y: -150 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: 'spring', bounce: 0.3 }}
          viewport={{ once: true }}
          className="faq-copy"
        >
          <h1 className="faq-header">FAQ</h1>
          <p className="faq-desc">
            Find answers to common questions about our services and processes.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: 'spring', bounce: 0.3 }}
          viewport={{ once: true }}
          className="faq-qna"
        >
          <Accordion defaultActiveKey="">
            <Accordion.Item eventKey="0">
              <Accordion.Header >
                What kind of businesses can benefit from your software
                development services?
              </Accordion.Header>
              <Accordion.Body>
                Our services are tailored for a diverse range of industries.
                Whether you’re a startup, SME, or a large corporation, we
                provide customized solutions to meet your specific needs in web,
                app, and system development. Our expertise is designed to
                support businesses in any sector to enhance their digital
                presence and operational efficiency.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                How does your development process ensure our project aligns with
                our business goals?
              </Accordion.Header>
              <Accordion.Body>
                We begin with a thorough consultation to understand your
                business objectives. Our development process is transparent and
                iterative, involving regular updates and feedback sessions. This
                ensures that the final product not only meets but exceeds your
                expectations, aligning seamlessly with your strategic business
                goals.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                Can your software solutions integrate with our existing systems?
              </Accordion.Header>
              <Accordion.Body>
                Absolutely. Our approach is to create solutions that can
                seamlessly integrate with your existing systems. We prioritize
                compatibility and scalability, ensuring that our software not
                only enhances your current operations but also adapts to future
                technological advancements and business growth.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                What kind of ongoing support and maintenance do you offer
                post-development?
              </Accordion.Header>
              <Accordion.Body>
                Post-development, we offer comprehensive support and maintenance
                to ensure your software continues to run smoothly. This includes
                regular updates, bug fixes, and performance optimization.
                Additionally, we provide dedicated customer service to address
                any queries or modifications you may need.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </motion.div>
      </div>
    </div>
  );
}

export default Faq;
