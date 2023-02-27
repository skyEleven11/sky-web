import Head from "next/head";
import { Container } from "react-bootstrap";
import OurClients from "../sections/ourClients";
import ServiceHome from "../sections/serviceHome";
import Welcome from "../sections/welcome";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sky Eleven Tradin Solutions</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container className="content-cont">
        <Welcome/>
        <ServiceHome title="Nuestros Servicios" subtitle="Soluciones Integrales" services={[]}/>
        <OurClients title="Nuestros Clientes" subtitle="Nos avalan y respaldan" messages={[]}/>
      </Container>
    </>
  );
}
