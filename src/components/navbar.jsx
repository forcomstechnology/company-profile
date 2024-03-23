import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Button,
  Stack,
} from "react-bootstrap";
import { useState, useEffect } from "react";
import logo from "../assets/logo.svg";
import Image from "next/image";

export default function NavigationBar() {
  const [direction, setDirection] = useState(
    window.innerWidth < 991 ? "vertical" : "horizontal"
  );

  // Menggunakan useEffect untuk menambahkan event listener saat komponen dimuat
  useEffect(() => {
    const handleResize = () => {
      setDirection(window.innerWidth < 991 ? "vertical" : "horizontal");
    };

    window.addEventListener("resize", handleResize);

    // Membersihkan event listener saat komponen dibongkar
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <Navbar
        id="NavigationBar"
        expand="lg"
        collapseOnSelect
        className="bg-secondary"
      >
        <Container>
          <Navbar.Brand href="#home">
            <Image
              src={logo}
              height="52"
              width="auto"
              className="d-inline-block align-top"
              alt="Logo"
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Stack direction={direction} gap={5}>
                <Nav.Link className="nav-item m-auto" href="#home">
                  Home
                </Nav.Link>
                <Nav.Link className="nav-item m-auto" href="#about-us">
                  About Us
                </Nav.Link>
                <NavDropdown
                  className="nav-item m-auto"
                  title="Services"
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item href="services">
                    Web Development
                  </NavDropdown.Item>
                  <NavDropdown.Item href="services">
                    Mobile Development
                  </NavDropdown.Item>
                  <NavDropdown.Item href="services">
                    System Development
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link className="nav-item m-auto" href="faq">
                  FAQ
                </Nav.Link>
              </Stack>
            </Nav>
          </Navbar.Collapse>
          <Button
            href="https://wa.me/6282138754680"
            target="_blank"
            rel="noreferrer"
            variant="primary"
            className="navBtn"
          >
            Get in touch
          </Button>
        </Container>
      </Navbar>
    </>
  );
}
