import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Accordion, Container } from "react-bootstrap";
import Footer from "../../components/footer";
import GeneralSkeleton from "../../components/generalSkeleton";
import Header from "../../components/header";

import styles from "../../styles/pagesStlyes/IndividualCourse.module.css";
export default function IndividualViewCourses() {
  const [courseIllustration, setCourseIllustration] = useState();
  const [individualCourse, setIndividualCourse] = useState({});
  const [showLoader, setShowLoader] = useState(true)
  const router = useRouter();
  const { courseName, curso } = router.query;

  useEffect(() => {
    if (curso) {
      const serviceRequest = async () => {
        try {
          const response = await (
            await fetch(
              `/api/courses`
            )
          ).json();
          response.forEach((element) => {
            if (element.ID === curso){
              element.DEFINICION_DEL_SERVICIO = element.DEFINICION_DEL_SERVICIO.split("@")
              element.WELCOME = element.DEFINICION_DEL_SERVICIO.shift()
              element.CLOSETEXT = element.DEFINICION_DEL_SERVICIO.pop()
              setIndividualCourse(element);
              setShowLoader(false)
            }
            
          });
        } catch (err) {
          console.log("err-->", err);
        }
      };

      serviceRequest();
    }
  }, [courseName, curso]);

  useEffect(() => {
    if (individualCourse.ID) {
      const ServiceIllustration = dynamic(() =>
        import(
          `../../components/illustrations/${individualCourse.ILUSTRACION}`,
          {
            ssr: false,
          }
        )
      );
      setCourseIllustration(
        <ServiceIllustration customClass={styles.individualIllustration} />
      );
    }
  }, [individualCourse]);


  return showLoader ? (
    <GeneralSkeleton showLoader={showLoader}/>
  ) : (
    <>
    <Container className="content-cont">
      <section
        className={`row d-flex justify-content-between align-items-center ${styles.coursesCont}`}
      >
        <Header
          title={individualCourse.NOMBRE}
          subtitle={"La Mejor atencion y servicio"}
          color="darkBlue"
        />

        <div
          className={`row d-flex justify-content-between align-items-center ${styles.individualCourseCont}`}
        >
          <div className={`col-md-12 col-lg-6 ${styles.topMarginServ} ${styles.blueCircle}`}>
            {courseIllustration}
          </div>
          <div className={`col-md-12 col-lg-6 ${styles.topMarginServ}`}>
            <p className="general-text dark-blue-text">
            {individualCourse.WELCOME}
            </p>
          </div>
          <div className={`col-md-12 col-lg-5 ${styles.topMarginCouse}`}>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header className={styles.accordionHeaders}>
                  DESCRIPCION{" "}
                </Accordion.Header>
                <Accordion.Body>
                {individualCourse.DEFINICION_DEL_SERVICIO}
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>DETALLES</Accordion.Header>
                <Accordion.Body>
                <ul>
                    {individualCourse.DURACION ? (
                      <li>
                        {" "}
                        <strong>DURACION:</strong> {individualCourse.DURACION}{" "}
                      </li>
                    ) : (
                      <></>
                    )}
                    {individualCourse.MODALIDAD ? (
                      <li>
                        {" "}
                        <strong>MODALIDAD:</strong>{" "}
                        {individualCourse.MODALIDAD}{" "}
                      </li>
                    ) : (
                      <></>
                    )}
                    {individualCourse.PRECIO_ARG ? (
                      <li>
                        <strong>PRECIO:</strong> {individualCourse.PRECIO_ARG}{" "}
                      </li>
                    ) : (
                      <></>
                    )}
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header className={styles.accordionHeaders}>
                  PRESENTADORES{" "}
                </Accordion.Header>
                <Accordion.Body>
                {individualCourse.PRESTADORES}
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header className={styles.accordionHeaders}>
                  TEMARIO{" "}
                </Accordion.Header>
                <Accordion.Body>
                {individualCourse.TEMARIO ? individualCourse.TEMARIO : "No hay temario disponible"}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          <div className={`col-md-12 col-lg-6 ${styles.serviceCont}`}>
            <p className="general-text dark-blue-text">
              {individualCourse.CLOSETEXT}
            </p>
            <Link href={`${individualCourse.LINK_WHATSAPP}`}>
              <button className="btn-sky">Adquirir Curso</button>
            </Link>
          </div>
         
        </div>
      </section>
    </Container>
     <Footer />
     </>
  );
}
