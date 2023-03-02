import dynamic from "next/dynamic";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Footer from "../components/footer";
import AboutUs from "../sections/aboutUs";
import OurClients from "../sections/ourClients";
import OurCourses from "../sections/ourCourses";
import OurTeam from "../sections/ourTeam";
import Partners from "../sections/partners";
import ServiceHome from "../sections/serviceHome";
import Welcome from "../sections/welcome";

export default function Home() {
  const [courses, setCourses] = useState([{}]);
  const [team, setTeam] = useState([{}]);

  useEffect(() => {
    const excelRequest = async () => {
      try {
        const response = await (await fetch("/api/courses")).json();
        setCourses(response);
      } catch (err) {
        console.log("err-->", err);
      }
    };
    excelRequest();
  }, []);

  useEffect(() => {
    const excelRequest = async () => {
      try {
        const response = await (await fetch("/api/team")).json(); 
        setTeam(response);
      } catch (err) {
        console.log("err-->", err);
      }
    };
    excelRequest();
  }, []);

  return (
    <>
      <Head>
        <title>Sky Eleven Tradin Solutions</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <Container className="content-cont">
        <Welcome />
        <ServiceHome
          title="Nuestros Servicios"
          subtitle="Soluciones Integrales"
          services={[]}
        />
        <OurClients
          title="Nuestros Clientes"
          subtitle="Nos avalan y respaldan"
          messages={[]}
        />
        <OurCourses
          title="Nuestros Cursos"
          subtitle="educación sin límites"
          courses={courses}
        />
        <AboutUs title="¿Quienes Somos?" subtitle="compromiso y seriedad" />
      </Container>
      <OurTeam
        title="Nuestro Equipo"
        subtitle="Profesionales de la industria"
        team={team}
      />
      <Container className="content-cont final-element">
        <Partners
          title="¿Quienes nos Respaldan?"
          subtitle="Socios oficiales con grandes beneficios"
        />
      </Container>
      <Footer />
    </>
  );
}
