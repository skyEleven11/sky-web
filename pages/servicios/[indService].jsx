import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Accordion, Container } from "react-bootstrap";
import Header from "../../components/header";
import IndividualServBack_illustration from "../../components/illustrations/IndividualServBack_illustration";

import styles from "../../styles/pagesStlyes/IndividualService.module.css";
export default function IndividualViewService() {
  const [serviceIllustration, setServiceIllustration] = useState();
  const router = useRouter();
  const { indService } = router.query;

  useEffect(() => {
    if (indService) {
      const ServiceIllustration = dynamic(() =>
        import(`../../components/illustrations/services/${indService}`, {
          ssr: false,
        })
      );
      setServiceIllustration(
        <ServiceIllustration customClass={styles.individualIllustration} />
      );
    }
  }, [indService]);

  return (
    <Container className="content-cont">
      <section
        className={`row d-flex justify-content-between align-items-center ${styles.serviceCont}`}
      >
        <Header
          title={indService ? indService.replaceAll("_", " ") : ""}
          subtitle={"La Mejor atencion y servicio"}
          color="darkBlue"
        />

        <div
          className={`row d-flex justify-content-between align-items-center ${styles.individualServiceCont}`}
        >
          <IndividualServBack_illustration
            customClass={`${styles.individualSerBackground}`}
          />

          <div className={`col-6 ${styles.topMarginServ}`}>
            {serviceIllustration}
          </div>
          <div className={`col-6 ${styles.topMarginServ}`}>
            <p className="general-text dark-blue-text">
              Emision por solicitud de clientes de certificado de ingresos.
              Documentación legal con certificación y legalización en consejo
              Profesional de ciencias Económicas de la Provincia de San Luis.
            </p>
          </div>
          <div className={`col-5`}>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header className={styles.accordionHeaders}>Accordion Item #1</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Accordion Item #2</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          <div className={`col-6`}>
            <p className="general-text dark-blue-text">
              Si estás buscando la oportunidad de convertirte en un trader
              profesional y obtener ingresos consistentes en el mercado
              financiero ¡este curso es para ti!
            </p>
            <Link href={"#"}>
              <button className="btn-sky">Adquirir Servicio</button>
            </Link>
          </div>
        </div>
      </section>
    </Container>
  );
}
