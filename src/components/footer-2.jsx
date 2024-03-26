import "../style/footer.css";
import igLogo from "../assets/igLogo.svg";
import linkedinLogo from "../assets/linkedinLogo.svg";
import brand from "../assets/logo.svg";
import ornament from "../assets/ornament.svg";
import { motion } from "framer-motion";
import up from "../assets/icons/arrow-up.svg";
import { Stack } from "react-bootstrap";
import Image from "next/image";

const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

export default function Footer() {
  return (
    <div className="bg-dark">
      <div className="container footer bg-dark">
        <Stack>
          <div className="element">
            <div className="links">
              <div className="social d-flex flex-column">
                <h2 className="text-primary navigator">Follow Us</h2>
                <div className="icon d-flex">
                  <a
                    href="http://www.instagram.com/koribarak.technology"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image src={igLogo} alt="instagram logo" />
                  </a>
                  <a
                    href="http://www.linkedin.com/company/koribarak-tech"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image src={linkedinLogo} alt="linkedin logo" />
                  </a>
                </div>
              </div>
              <div className="explore">
                <h2 className="text-primary navigator">Explore</h2>
                <div className="direct d-flex flex-column">
                  <a href="#about-us" className="text-light direct">
                    About Us
                  </a>
                  <a href="#our-services" className="text-light direct">
                    Services
                  </a>
                  <a href="" className="text-light direct">
                    FAQ
                  </a>
                </div>
              </div>
              <div className="contacts">
                <h2 className="text-primary navigator">Contact Us</h2>
                <div className="direct d-flex flex-column">
                  <a
                    className="text-light contact"
                    href="https://wa.me/6282138754680"
                    target="_blank"
                    rel="noreferrer"
                  >
                    +62 821-3875-4680
                  </a>
                  <a
                    href="mailto:forcomstechnology@gmail.com"
                    className="text-light contact"
                  >
                    forcomstechnology@gmail.com
                  </a>
                </div>
              </div>
              <div className="address">
                <h2 className="text-primary navigator ">Address</h2>
                <div className="direct gap-0">
                  <p className="direct text-light mb-0">
                    Jl. Ir. Sutami, Kemenuh, Kabupaten Gianyar, Bali 80582
                  </p>
                  <a
                    href="https://www.google.com/maps/place/8%C2%B033'22.0%22S+115%C2%B017'13.8%22E/@-8.556116,115.287157,17z/data=!3m1!4b1!4m4!3m3!8m2!3d-8.556116!4d115.287157?entry=ttu"
                    style={{ color: "#9C9C9C", textDecoration: "none" }}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    View on maps
                  </a>
                </div>
              </div>
            </div>
            <div className="brand">
              <h2 className="tag ">High-Quality Technology Solutions</h2>
              <a href="https://www.forcoms.com">
                <Image className="brand-logo" src={brand} alt="Brand" />
              </a>
            </div>
          </div>
        </Stack>
        <p className="copyright text-light">
          © 2024 Kori Barak Technology, All Rights Reserved.
        </p>
        <Image className="footer-ornament" src={ornament} alt="" />
        <motion.div
          className="img-up"
          onClick={scrollTop}
          animate={{
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          style={{
            filter:
              "drop-shadow(0px 10px 10px rgba(0, 0, 0, 0.04)) drop-shadow(0px 20px 25px rgba(0, 0, 0, 0.10))",
            position: "absolute",
            bottom: "32px",
            right: "32px",
            cursor: "pointer",
          }}
        >
          <Image src={up} alt="" />
        </motion.div>
      </div>
    </div>
  );
}
