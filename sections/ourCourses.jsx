import Header from "../components/header";
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
        </div>
        <div className={`${styles.individualCourseCont} ${styles.right}`}>
          <div className={styles.content}>
            <h2>2016</h2>
            <p>Lorem ipsum..</p>
          </div>
        </div>
        <div className={`${styles.individualCourseCont} ${styles.left}`}>
          <div className={styles.content}>
            <h2>2017</h2>
            <p>Lorem ipsum..</p>
          </div>
        </div>
      </div>
    </section>
  );
}
