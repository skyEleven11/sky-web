import Image from "next/image";
import { Container, Nav, Navbar } from "react-bootstrap";
import styles from "../styles/componentsStyles/Navbar.module.css";

export default function Nabvar() {
  return (
    <Navbar
      fixed="top"
      expand="lg"
      variant="dark"
      className={styles.customNavbar}
    >
      <Container>
        <Navbar.Brand href="#home">
          <Image
            src={"/images/logo.png"}
            alt="Sky Eleven Logo"
            width="100"
            height="80"
            className={styles.navbarLogo}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className={styles.customColappse}
        >
          <Nav className="me-auto">
            <Nav.Link className={styles.customNavLink} href="/">
              INICIO
            </Nav.Link>
            <Nav.Link className={styles.customNavLink} href="/service">
              SERVICIOS
            </Nav.Link>
            <Nav.Link className={styles.customNavLink} href="/courses">
              CURSOS
            </Nav.Link>
            <Nav.Link className={styles.customNavLink} href="/livesesions">
              EN VIVO
            </Nav.Link>
            <Nav.Link className={styles.customNavLink} href="/us">
              NOSOTROS
            </Nav.Link>
            <Nav.Link className={styles.customNavLink} href="/contact ">
              CONTACTO
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
