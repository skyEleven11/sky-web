import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
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

          <div className={`col-6`}>{serviceIllustration}</div>
          <div className={`col-6`}>
            <p className="general-text dark-blue-text">
              Emision por solicitud de clientes de certificado de ingresos.
              Documentación legal con certificación y legalización en consejo
              Profesional de ciencias Económicas de la Provincia de San Luis.
            </p>
          </div>
          <div className={`col-6`}></div>
          <div className={`col-6`}>
            <p className="general-text dark-blue-text">
              Si estás buscando la oportunidad de convertirte en un trader
              profesional y obtener ingresos consistentes en el mercado
              financiero ¡este curso es para ti!
            </p>
            <Link href={"#"}>
              <button className="btn-sky">Saber Más</button>
            </Link>
          </div>
        </div>
      </section>
    </Container>
  );
}
