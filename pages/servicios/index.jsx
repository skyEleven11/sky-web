import { Container, Form } from "react-bootstrap";
import Header from "../../components/header";
import IndividualServBack_illustration from "../../components/illustrations/IndividualServBack_illustration";
import CursosGenerico_illustration from "../../components/illustrations/CursosGenerico_illustration";
import GestionGenerico_Illustration from "../../components/illustrations/GestionGenerico_Illustration";
import ImpositivosGenerico_Illustration from "../../components/illustrations/ImpositivosGenerico_Illustration";
import styles from "../../styles/pagesStlyes/Services.module.css";
import Link from "next/link";
import Footer from "../../components/footer";
import LiveSesions from "../../components/illustrations/LiveSesions";

export default function Services() {
  return (
    <>
      <Container className="content-cont">
        <section
          className={`row d-flex justify-content-between align-items-center ${styles.serviceCont}`}
        >
          <Header
            title={"Nuestros Servicios"}
            subtitle={"Soluciones integrales"}
            color="darkBlue"
          />

          <IndividualServBack_illustration
            customClass={`${styles.rightIllustrationServ} ${styles.firstIllust}`}
          />
          <IndividualServBack_illustration
            customClass={styles.leftIllustrationServ}
          />
          <IndividualServBack_illustration
            customClass={`${styles.rightIllustrationServ} ${styles.secondIllust}`}
          />
          <div
            className={`row d-flex justify-content-between flex-row-reverse align-items-center ${styles.firstService}`}
          >
            <div className="col-4">
              <CursosGenerico_illustration />
            </div>
            <div className="col-5">
              <h6 className="small-headers dark-blue-text">Cursos</h6>
              <p className="general-text dark-blue-text">
                Descubre nuestros cursos diseñados para ayudarte a mejorar tus
                habilidades y conocimientos en el área profesional, impartidos
                por expertos y respaldados por nuestra trayectoria de excelencia
                y seriedad.
              </p>
              <Link href={"/cursos"}>
                <button className="btn-sky">Saber Más</button>
              </Link>
            </div>
          </div>
          <div
            className={`row d-flex justify-content-between align-items-center ${styles.secondService}`}
          >
            <div className="col-4">
              <GestionGenerico_Illustration />
            </div>
            <div className="col-5">
              <h6 className="small-headers dark-blue-text">DE GESTION</h6>
              <p className="general-text dark-blue-text">
                Nuestros servicios de gestión están diseñados para ayudarte a
                optimizar tus procesos empresariales y mejorar tu productividad,
                asi como también realizar esas tareas profesionales tan
                importantes para el mundo comercial. Confía en nuestra
                experiencia y compromiso con la excelencia.
              </p>
              <Link href={"/servicios/gestion"}>
                <button className="btn-sky">Saber Más</button>
              </Link>
            </div>
          </div>
          <div
            className={`row d-flex justify-content-between flex-row-reverse align-items-center ${styles.thirdService}`}
          >
            <div className="col-4">
              <ImpositivosGenerico_Illustration
                customClass={styles.impositiveIllust}
              />
            </div>
            <div className="col-5">
              <h6 className="small-headers dark-blue-text">impositivos</h6>
              <p className="general-text dark-blue-text">
                Nuestros servicios impositivos están dirigidos por expertos en
                la materia, para ayudarte a cumplir con tus obligaciones
                fiscales y maximizar tus beneficios fiscales de manera legal y
                ética.
              </p>
              <Link href={"/servicios/impositivos"}>
                <button className="btn-sky">Saber Más</button>
              </Link>
            </div>
          </div>
        </section>

        <section
          className={`row d-flex justify-content-between align-items-center ${styles.liveSessionsSection}`}
        >
          <div className={`col-6`}>
            <LiveSesions customClass={styles.cartificateIllust} />
            <div className={styles.LiveSesionsInfo}>
              <h6 className="small-headers dark-blue-text">
                ingresa a nuetras clases en Vivo
              </h6>
              <p className="general-text dark-blue-text">
                Vas a tener acceso a la sala online y un acompañamiento
                personalizado para tus operaciones y analisis con profesionales
                de la industria.
              </p>
            </div>
          </div>
          <div className={`col-5`}>
            <Form action="https://formspree.io/f/xwkjnzyp" method="POST">
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label className="general-text dark-blue-text">
                  Nombre y Apellido
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ej: Juan Perez"
                  name="Nombre y Apellido"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="general-text dark-blue-text">
                  Email
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Ej: juan@gmail.com"
                  name="Email"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPhone">
                <Form.Label className="general-text dark-blue-text">
                  Telefono de Contacto
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ej: +54266458628"
                  name="Telefono"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicBirth">
                <Form.Label className="general-text dark-blue-text">{`Fecha de Cumpleaños (opcional)`}</Form.Label>
                <Form.Control type="date" placeholder="Ej: 13/03/1995" name="Cumpleaños"/>
              </Form.Group>
              <button className={styles.libertexButton}>Registrarme</button>
            </Form>
          </div>
        </section>
      </Container>
      <Footer />
    </>
  );
}
