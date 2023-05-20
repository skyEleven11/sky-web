import Header from "../components/header";
import ServiceHome_background from "../components/illustrations/ServiceHome_background";
import CursosGenerico_illustration from "../components/illustrations/CursosGenerico_illustration";
import GestionGenerico_Illustration from "../components/illustrations/GestionGenerico_Illustration";
import ImpositivosGenerico_Illustration from "../components/illustrations/ImpositivosGenerico_Illustration";
import styles from "../styles/sectionsStyles/serviceHome.module.css";

export default function ServiceHome({ title, subtitle, services }) {
  return (
    <section
      className={`row d-flex justify-content-between align-items-center ${styles.serviceHomeCont}`}
    >
      <Header title={title} subtitle={subtitle} color="darkBlue" />
      <ServiceHome_background
        customClass={`${styles.servicesBackground} d-none d-md-block`}
      />
      <div className={styles.allServiceCont}>
        <div
          className={`row justify-content-between align-items-center ${styles.individualServiceCont}`}
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <CursosGenerico_illustration customClass="col-md-12 col-lg-4" />
          <div
            className={`col-md-12 col-lg-5 ${styles.coursesInfo}`}
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <h6 className="small-headers dark-blue-text">Cursos</h6>
            <p className="general-text dark-blue-text">
              Descubre nuestros cursos diseñados para ayudarte a mejorar tus
              habilidades y conocimientos en el área profesional, impartidos por
              expertos y respaldados por nuestra trayectoria de excelencia y
              seriedad.
            </p>
          </div>
        </div>

        <div
          className={`row justify-content-between align-items-center ${styles.individualServiceCont}`}
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <GestionGenerico_Illustration customClass="col-md-12 col-lg-4" />
          <div className={`col-md-12 col-lg-5 ${styles.coursesInfo}`}>
            <h6 className="small-headers">De Gestion</h6>
            <p className="general-text">
              Nuestros servicios de gestión están diseñados para ayudarte a
              optimizar tus procesos empresariales y mejorar tu productividad,
              asi como también realizar esas tareas profesionales tan
              importantes para el mundo comercial. Confía en nuestra experiencia
              y compromiso con la excelencia.
            </p>
          </div>
        </div>

        <div
          className={`row justify-content-between align-items-center ${styles.individualServiceCont}`}
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <ImpositivosGenerico_Illustration customClass="col-md-12 col-lg-4" />
          <div className={`col-md-12 col-lg-5 ${styles.coursesInfo}`}>
            <h6 className="small-headers">Impositivos</h6>
            <p className="general-text">
              Nuestros servicios impositivos están dirigidos por expertos en la
              materia, para ayudarte a cumplir con tus obligaciones fiscales y
              maximizar tus beneficios fiscales de manera legal y ética.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
