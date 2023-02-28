import Header from "../components/header";
import CursoIntegral_illustation from "../components/illustrations/CursoIntegral_illustation";
import CursoAvanzado_illustation from "../components/illustrations/CursoAvanzado_illustation";
import CursoCripto_illustration from "../components/illustrations/CursoCripto_illustration";
import styles from "../styles/sectionsStyles/ourCourses.module.css";

export default function OurCourses({ title, subtitle, courses }) {
  return (
    <section
      className={`row d-flex justify-content-between align-items-center ${styles.ourCoursesCont}`}
    >
      <Header title={title} subtitle={subtitle} />
      <div className={styles.timeline}>

        <div className={`${styles.individualCourseCont} ${styles.left}`}>
          <div className={styles.content}>
            <h6 className="small-headers white-blue-text">Cursos</h6>
            <p className="general-text white-blue-text">
              Tendrás la oportunidad de adquirir los conocimientos necesarios
              para convertirte en un inversor independiente y competente en el
              mundo de las criptomonedas. Aprenderás a hacer tus propias
              inversiones sin necesidad de arriesgar tu capital en manos de
              terceros, y tendrás la disponibilidad permanente de tus fondos.
            </p>
            <button className="btn-sky">Saber Más</button>
          </div>
          <div className={` ${styles.ilustrationRight}`}>
            <CursoIntegral_illustation customClass={styles.courseIllustrarionSize}/>
          </div>
        </div>

        <div className={`${styles.individualCourseCont} ${styles.right}`}>
          <div className={styles.content}>
            <h6 className="small-headers white-blue-text">Cursos</h6>
            <p className="general-text white-blue-text">
              Tendrás la oportunidad de adquirir los conocimientos necesarios
              para convertirte en un inversor independiente y competente en el
              mundo de las criptomonedas. Aprenderás a hacer tus propias
              inversiones sin necesidad de arriesgar tu capital en manos de
              terceros, y tendrás la disponibilidad permanente de tus fondos.
            </p>
            <button className="btn-sky">Saber Más</button>
          </div>
          <div className={`${styles.ilustrationLeft}`}>
            <CursoAvanzado_illustation customClass={styles.courseIllustrarionSize}/>
          </div>
        </div>

        <div className={`${styles.individualCourseCont} ${styles.left}`}>
          <div className={styles.content}>
            <h6 className="small-headers white-blue-text">Cursos</h6>
            <p className="general-text white-blue-text">
              Tendrás la oportunidad de adquirir los conocimientos necesarios
              para convertirte en un inversor independiente y competente en el
              mundo de las criptomonedas. Aprenderás a hacer tus propias
              inversiones sin necesidad de arriesgar tu capital en manos de
              terceros, y tendrás la disponibilidad permanente de tus fondos.
            </p>
            <button className="btn-sky">Saber Más</button>
          </div>
          <div className={` ${styles.ilustrationRight}`}>
            <CursoCripto_illustration customClass={styles.courseIllustrarionSize}/>
          </div>
        </div>
      </div>
      <div class={`${styles.bubble} ${styles.bubbleRight}`}>
            <p className={styles.message}>
              Excelente servicio. Lo más importante es que constantemente se van
              perfeccionando y tienen un seguimiento personalizado hacia cada
              individuo, generando que uno continúe estudiando y aprendiendo.
            </p>
          </div>
    </section>
  );
}
