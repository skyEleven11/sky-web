import { Container } from "react-bootstrap";
import Header from "../../components/header";
import Footer from "../../components/footer";
import CursoCripto_illustration from "../../components/illustrations/CursoCripto_illustration";
import CursoAvanzado_illustation from "../../components/illustrations/CursoAvanzado_illustation";
import CursoIntegral_illustation from "../../components/illustrations/CursoIntegral_illustation";
import Certicate_Illustration from "../../components/illustrations/Certicate_Illustration";
import styles from "../../styles/pagesStlyes/Courses.module.css";
export default function Home() {
  return (
    <>
      <Container className="content-cont">
        <section
          className={`row d-flex justify-content-between align-items-center ${styles.coursesCont}`}
        >
          <Header
            title={"Nuestros Cursos"}
            subtitle={"EDUCACIÓN SIN LÍMITES"}
            color="darkBlue"
          />
          <div className={styles.timeline}>
            <div className={`${styles.individualCourseCont} ${styles.left}`}>
              <div className={styles.barRight}></div>
              <div className={styles.content}>
                <h6 className="small-headers dark-blue-text">Cursos</h6>
                <p className="general-text dark-blue-text">
                  Tendrás la oportunidad de adquirir los conocimientos
                  necesarios para convertirte en un inversor independiente y
                  competente en el mundo de las criptomonedas. Aprenderás a
                  hacer tus propias inversiones sin necesidad de arriesgar tu
                  capital en manos de terceros, y tendrás la disponibilidad
                  permanente de tus fondos.
                </p>
                <button className="btn-sky">Saber Más</button>
              </div>
              <div className={` ${styles.ilustrationRight}`}>
                <CursoIntegral_illustation
                  customClass={styles.courseIllustrarionSize}
                />
              </div>
            </div>

            <div className={`${styles.individualCourseCont} ${styles.right}`}>
              <div className={styles.barLeft}></div>
              <div className={styles.content}>
                <h6 className="small-headers dark-blue-text">Cursos</h6>
                <p className="general-text dark-blue-text">
                  Tendrás la oportunidad de adquirir los conocimientos
                  necesarios para convertirte en un inversor independiente y
                  competente en el mundo de las criptomonedas. Aprenderás a
                  hacer tus propias inversiones sin necesidad de arriesgar tu
                  capital en manos de terceros, y tendrás la disponibilidad
                  permanente de tus fondos.
                </p>
                <button className="btn-sky">Saber Más</button>
              </div>
              <div className={`${styles.ilustrationLeft}`}>
                <CursoAvanzado_illustation
                  customClass={styles.courseIllustrarionSize}
                />
              </div>
            </div>

            <div className={`${styles.individualCourseCont} ${styles.left}`}>
              <div className={styles.barRight}></div>
              <div className={styles.content}>
                <h6 className="small-headers dark-blue-text">Cursos</h6>
                <p className="general-text dark-blue-text">
                  Tendrás la oportunidad de adquirir los conocimientos
                  necesarios para convertirte en un inversor independiente y
                  competente en el mundo de las criptomonedas. Aprenderás a
                  hacer tus propias inversiones sin necesidad de arriesgar tu
                  capital en manos de terceros, y tendrás la disponibilidad
                  permanente de tus fondos.
                </p>
                <button className="btn-sky">Saber Más</button>
              </div>
              <div className={` ${styles.ilustrationRight}`}>
                <CursoCripto_illustration
                  customClass={styles.courseIllustrarionSize}
                />
              </div>
            </div>
          </div>
          <div className={styles.certificateBox}>
            <Certicate_Illustration customClass={styles.cartificateIllust} />
            <p className="general-text dark-blue-text">
              Entre todos los beneficios que tenemos para darte ademas
              incluiremos un certificado cuando allas terminado el curso.
              Certificarte y sobre todo de la mano de{" "}
              <span className={styles.libertex}>Libertex</span> puede abrirte
              muchas puertas en el mundo del Trading
            </p>
          </div>
        </section>
      </Container>
      <Footer />
    </>
  );
}
