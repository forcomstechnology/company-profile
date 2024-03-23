import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Button,
  Stack,
} from "react-bootstrap";

import { useState, useEffect } from "react";
import logo from "../assets/logo2.svg";
import Image from "next/image";

export default function NavigationBar() {
  const [direction, setDirection] = useState(
    window.innerWidth < 991 ? "vertical" : "horizontal"
  );
  const [path, setPath] = useState("");
  useEffect(() => {
    const currentPath = window.location.pathname;
    const pathParts = currentPath.split("/");
    const currentPage = pathParts[pathParts.length - 1];
    setPath(currentPage);
  }, []);

  useEffect(() => {
    let active = "";
    if (path === "faq") {
      active = document.querySelector("#faq");
    } else if (path === "blog") {
      active = document.querySelector("#blog");
    }

    if (active) {
      active.classList.add("active");
    }
  }, [path]);

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
        className="bg-light"
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

          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="navToggler"
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Stack direction={direction} gap={5}>
                <Nav.Link
                  id="Home"
                  className="nav-item m-auto text-secondary"
                  href="/"
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  id="about"
                  className="nav-item m-auto text-secondary"
                  href="/#about-us"
                >
                  About Us
                </Nav.Link>
                <NavDropdown
                  className="nav-item m-auto text-secondary navDrop"
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

                <Nav.Link
                  id="faq"
                  className="nav-item m-auto text-secondary"
                  href="faq"
                >
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
