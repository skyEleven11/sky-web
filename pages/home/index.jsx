import Image from "next/image";
import { Container, Nav, Navbar } from "react-bootstrap";
import Header from "../../components/header";
import styles from "../../styles/componentsStyles/Navbar.module.css"


export default function Home() {
  return (
    <Container className="content-cont">
        <section>
            <Header title={"Nuestros Servicios"} subtitle={"Soluciones integrales"}/>
        </section>
    </Container>
  )
}
