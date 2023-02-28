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
      <Header title={title} subtitle={subtitle} color="darkBlue"/>
      <ServiceHome_background customClass={`${styles.servicesBackground}`} />
      <div className={styles.allServiceCont}>
        <div
          className={`row justify-content-between align-items-center ${styles.individualServiceCont}`}
        >
          <CursosGenerico_illustration customClass="col-4" />
          <div className="col-5">
            <h6 className="small-headers dark-blue-text">Cursos</h6>
            <p className="general-text dark-blue-text">
              Tendrás la oportunidad de adquirir los conocimientos necesarios
              para convertirte en un inversor independiente y competente en el
              mundo de las criptomonedas. Aprenderás a hacer tus propias
              inversiones sin necesidad de arriesgar tu capital en manos de
              terceros, y tendrás la disponibilidad permanente de tus fondos.
            </p>
          </div>
        </div>

        <div
          className={`row justify-content-between align-items-center ${styles.individualServiceCont}`}
        >
          <GestionGenerico_Illustration customClass="col-4" />
          <div className="col-5">
            <h6 className="small-headers">Gestion</h6>
            <p className="general-text">
              Tendrás la oportunidad de adquirir los conocimientos necesarios
              para convertirte en un inversor independiente y competente en el
              mundo de las criptomonedas. Aprenderás a hacer tus propias
              inversiones sin necesidad de arriesgar tu capital en manos de
              terceros, y tendrás la disponibilidad permanente de tus fondos.
            </p>
          </div>
        </div>

        <div
          className={`row justify-content-between align-items-center ${styles.individualServiceCont}`}
        >
          <ImpositivosGenerico_Illustration customClass="col-4" />
          <div className="col-5">
            <h6 className="small-headers">Impositivos</h6>
            <p className="general-text">
              Tendrás la oportunidad de adquirir los conocimientos necesarios
              para convertirte en un inversor independiente y competente en el
              mundo de las criptomonedas. Aprenderás a hacer tus propias
              inversiones sin necesidad de arriesgar tu capital en manos de
              terceros, y tendrás la disponibilidad permanente de tus fondos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
