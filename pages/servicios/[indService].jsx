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
  const [individualService, setIndividualService] = useState({});
  const router = useRouter();
  const { serviceName, impositivos, gestion } = router.query;

  useEffect(() => {
    if (gestion || impositivos) {
      const serviceRequest = async () => {
        try {
          const response = await (
            await fetch(
              `/api/services/${impositivos ? "impositivos" : "gestion"}`
            )
          ).json();
          response.forEach((element) => {
            if (element.ID === gestion || element.ID === impositivos)
              setIndividualService(element);
          });
        } catch (err) {
          console.log("err-->", err);
        }
      };

      serviceRequest();
    }
  }, [serviceName, impositivos, gestion]);

  useEffect(() => {
    if (individualService.ID) {
      const ServiceIllustration = dynamic(() =>
        import(
          `../../components/illustrations/services/${individualService.ILUSTRACION}`,
          {
            ssr: false,
          }
        )
      );
      setServiceIllustration(
        <ServiceIllustration customClass={styles.individualIllustration} />
      );
    }
  }, [individualService]);

  return (
    <Container className="content-cont">
      <section
        className={`row d-flex justify-content-between align-items-center ${styles.serviceCont}`}
      >
        <Header
          title={individualService.NOMBRE}
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
              {individualService.DEFINICION_DEL_SERVICIO}
            </p>
          </div>
          <div className={`col-5 ${styles.serviceCont}`}>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>DETALLES</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    {individualService.DURACION ? (
                      <li>
                        {" "}
                        <strong>DURACION:</strong> {individualService.DURACION}{" "}
                      </li>
                    ) : (
                      <></>
                    )}
                    {individualService.MODALIDAD ? (
                      <li>
                        {" "}
                        <strong>MODALIDAD:</strong>{" "}
                        {individualService.MODALIDAD}{" "}
                      </li>
                    ) : (
                      <></>
                    )}
                    {individualService.PRECIO ? (
                      <li>
                        <strong>PRECIO:</strong> {individualService.PRECIO}{" "}
                      </li>
                    ) : (
                      <></>
                    )}
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>PRESTADORES</Accordion.Header>
                <Accordion.Body>{individualService.PRESTADORES}</Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          <div className={`col-6 ${styles.serviceCont}`}>
            <p className="general-text dark-blue-text">
              {individualService.DEFINICION_BREVE}
            </p>
            <Link href={`${individualService.LINK_WHATSAPP}`}>
              <button className="btn-sky">Adquirir Servicio</button>
            </Link>
          </div>
        </div>
      </section>
    </Container>
  );
}
