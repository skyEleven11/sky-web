import { Container } from "react-bootstrap";
import Header from "../../components/header";

export default function Home() {
  return (
    <Container className="content-cont">
      <section>
        <Header
          title={"Nuestros Servicios"}
          subtitle={"Soluciones integrales"}
        />
      </section>
    </Container>
  );
}
