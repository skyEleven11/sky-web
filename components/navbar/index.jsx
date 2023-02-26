import Image from "next/image";
import { Container, Nav, Navbar } from "react-bootstrap";
import styles from "../../styles/componentsStyles/Navbar.module.css"


export default function Nabvar() {
  return (
    <Navbar fixed="top" expand="lg" variant="dark" className={styles.customNavbar}>
    <Container>
      <Navbar.Brand href="#home">
        <Image src={"/images/logo.png"} alt="Sky Eleven Logo" width="90" height="70" className={styles.navbarLogo}/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className={styles.customColappse}>
        <Nav className="me-auto">
          <Nav.Link className={styles.customNavLink} href="#home">INICIO</Nav.Link>
          <Nav.Link className={styles.customNavLink} href="#link">SERVICIOS</Nav.Link>
          <Nav.Link className={styles.customNavLink} href="#link">CURSOS</Nav.Link>
          <Nav.Link className={styles.customNavLink} href="#link">EN VIVO</Nav.Link>
          <Nav.Link className={styles.customNavLink} href="#link">NOSOTROS</Nav.Link>
          <Nav.Link className={styles.customNavLink} href="#link">CONTACTO</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
