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
        <Navbar.Brand href="/">
          <Image
            src={"/images/logo.png"}
            alt="Sky Eleven Logo"
            width="280"
            height="75"
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
            <Nav.Link className={styles.customNavLink} href="/servicios">
              SERVICIOS
            </Nav.Link>
            <Nav.Link className={styles.customNavLink} href="/cursos">
              CURSOS
            </Nav.Link>
            <Nav.Link className={styles.customNavLink} href="/servicios#liveSessions">
              EN VIVO
            </Nav.Link>
            <Nav.Link className={styles.customNavLink} href="/#us">
              NOSOTROS
            </Nav.Link>
            <Nav.Link className={styles.customNavLink} href="#footer">
              CONTACTO
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
