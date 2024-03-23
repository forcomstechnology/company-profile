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
