import { Stack } from "react-bootstrap";
import "../style/about.css";
import imageWeb from "../assets/web-asset.svg";
import imageMobile from "../assets/mob-asset.svg";
import imageSystem from "../assets/system-asset.svg";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <>
      <div id="services" className=" container d-flex about bg-light">
        <Stack
          direction="horizontal"
          className=" container d-flex about bg-light"
        >
          <motion.div
            layout
            transition={{ duration: 1 }}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="about-copy"
            style={{ gap: 12 }}
          >
            <h1 className="about-header text-dark mb-3">Website Development</h1>
            <p className="about-desc text-dark">
              Our website development service offers comprehensive solutions,
              leveraging cutting-edge technologies to create high-performance
              and visually appealing websites tailored to meet your specific
              needs.
            </p>
            <Stack
              direction="horizontal"
              gap={3}
              className="justify-content-start align-items-start"
            >
              <i className="fa-solid fa-circle-check text-primary fa-2xl pt-3"></i>
              <Stack direction="vertical" gap={2}>
                <h2>Next.js 13</h2>
                <p className="about-desc">
                  Utilizing Next.js for server-side rendering to enhance
                  performance and SEO.
                </p>
              </Stack>
            </Stack>
            <Stack
              direction="horizontal"
              gap={3}
              className="justify-content-start align-items-start"
            >
              <i className="fa-solid fa-circle-check text-primary fa-2xl pt-3"></i>
              <Stack direction="vertical" gap={2}>
                <h2>Chakra UI</h2>
                <p className="about-desc">
                  Employing Chakra UI for streamlined and customizable React
                  components.
                </p>
              </Stack>
            </Stack>
            <Stack
              direction="horizontal"
              gap={3}
              className="justify-content-start align-items-start"
            >
              <i className="fa-solid fa-circle-check text-primary fa-2xl pt-3"></i>
              <Stack direction="vertical" gap={2}>
                <h2>Context Pattern</h2>
                <p className="about-desc">
                  Opting for the lightweight Context API over Redux for global
                  state management, reducing complexity.
                </p>
              </Stack>
            </Stack>
          </motion.div>
          <motion.div
            fluid
            transition={{ duration: 1 }}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="about-image"
            src={imageWeb}
            alt=""
          >
            <Image src={imageWeb} alt="" />
          </motion.div>
        </Stack>
        <Stack
          direction="horizontal"
          className=" container d-flex about bg-light"
        >
          <motion.div
            fluid
            transition={{ duration: 1 }}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="about-image"
            src={imageMobile}
            alt=""
          >
            <Image src={imageMobile} alt="" />
          </motion.div>
          <motion.div
            layout
            transition={{ duration: 1 }}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="about-copy"
            style={{ gap: 12 }}
          >
            <h1 className="about-header text-dark mb-3">Mobile Development</h1>
            <p className="about-desc text-dark">
              Our mobile development service provides top-tier solutions,
              harnessing the latest advancements in technology to craft
              intuitive and feature-rich mobile applications that cater to your
              unique requirements. From conceptualization to deployment, we
              prioritize innovation and client satisfaction, guaranteeing that
              your mobile app stands out in today&#39;s competitive digital
              landscape.
            </p>
            <Stack
              direction="horizontal"
              gap={3}
              className="justify-content-start align-items-start"
            >
              <i className="fa-solid fa-circle-check text-primary fa-2xl pt-3"></i>
              <Stack direction="vertical" gap={2}>
                <h2>Flutter</h2>
                <p className="about-desc">
                  Flutter offers a consistent UI experience across iOS and
                  Android with a single codebase, enhancing development
                  efficiency.
                </p>
              </Stack>
            </Stack>
            <Stack
              direction="horizontal"
              gap={3}
              className="justify-content-start align-items-start"
            >
              <i className="fa-solid fa-circle-check text-primary fa-2xl pt-3"></i>
              <Stack direction="vertical" gap={2}>
                <h2>Graph QL</h2>
                <p className="about-desc">
                  GraphQL optimizes data loading in mobile apps, improving
                  performance and reducing bandwidth usage.
                </p>
              </Stack>
            </Stack>
            <Stack
              direction="horizontal"
              gap={3}
              className="justify-content-start align-items-start"
            >
              <i className="fa-solid fa-circle-check text-primary fa-2xl pt-3"></i>
              <Stack direction="vertical" gap={2}>
                <h2>Firebase</h2>
                <p className="about-desc">
                  Firebase accelerates mobile app development by providing a
                  suite of backend services, enabling rapid prototyping and
                  deployment.
                </p>
              </Stack>
            </Stack>
          </motion.div>
        </Stack>
        <Stack
          direction="horizontal"
          className=" container d-flex about bg-light"
        >
          <motion.div
            layout
            transition={{ duration: 1 }}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="about-copy"
            style={{ gap: 12 }}
          >
            <h1 className="about-header text-dark mb-3">System Development</h1>
            <p className="about-desc text-dark">
              Our system development service provides end-to-end solutions,
              employing the latest technologies and methodologies to craft
              robust and efficient systems that align seamlessly with your
              organizational requirements. From initial concept to final
              implementation, we ensure meticulous attention to detail and a
              collaborative approach, ensuring that the resulting systems
              empower your business to thrive in today&#39;s dynamic market
              landscape.
            </p>
          </motion.div>
          <motion.div
            fluid
            transition={{ duration: 1 }}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="about-image"
            src={imageSystem}
            alt=""
          >
            <Image src={imageSystem} alt="" />
          </motion.div>
        </Stack>
      </div>
    </>
  );
}
