import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import Header from "../../../components/header";
import styles from "../../../styles/pagesStlyes/Allservices.module.css";
import Footer from "../../../components/footer";
import GeneralSkeleton from "../../../components/generalSkeleton";

export default function ServicesGestion() {
  const [services, setServices] = useState([{}]);
  const [illustration, setIllustration] = useState();
  const [showLoader, setShowLoader] = useState(true)

  useEffect(() => {
    const excelRequest = async () => {
      try {
        const response = await (await fetch("/api/services/impositivos")).json();
        setServices(response);
        setShowLoader(false)
      } catch (err) {
        console.log("err-->", err);
      }
    };
    excelRequest();
  }, []);

  useEffect(() => {
    if (services[1]) {
      const illArray = [];
      services.map((illustration) => {
        const DynamicIllustration = dynamic(() =>
          import(
            `../../../components/illustrations/services/${illustration.ILUSTRACION}`,
            {
              ssr: false,
            }
          )
        );
        illArray.push(
          <DynamicIllustration customClass={styles.indivudualServiceIll} />
        );
      });
      setIllustration(illArray);
    }
  }, [services]);

  console.log("services-->", services);

  return showLoader ? (
    <GeneralSkeleton showLoader={showLoader}/>
  ) :(
    <>
    <Container className="content-cont">
      <section
        className={`row d-flex justify-content-between align-items-center ${styles.serviceCont}`}
      >
        <Header
          title={"Servicios Impositivos"}
          subtitle={"Soluciones integrales"}
          color="darkBlue"
        />

        <div
          className={`d-flex justify-content-center align-items-center ${styles.cardsContainer}`}
        >
          {services &&
            services[0] &&
            services.map((service, i) => (
              <>
                {service.ACTIVO === "ACTIVO" ? (
                  <Link className="noLink" href={`/servicios/${service.NOMBRE.replaceAll(" ","_")}?impositivos=${service.ID}`}>
                  <div className={styles.cards}>
                    <div className={styles.illustrationCircle}>
                      {illustration && illustration[i]}
                    </div>
                    <p className={`${styles.cardHeaders} dark-blue-text`}>
                      {service.NOMBRE}
                    </p>
                  </div>
                    </Link>
                ) : (
                  <></>
                )}
              </>
            ))}
        </div>
      </section>
    </Container>
    <Footer />
    </>
  );
}
