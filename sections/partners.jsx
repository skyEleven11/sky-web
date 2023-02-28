import Image from "next/image";
import Header from "../components/header";
import LibertexBackgound from "../components/illustrations/LibertexBackgound";
import styles from "../styles/sectionsStyles/partners.module.css";

export default function Partners({ title, subtitle }) {
  return (
    <section
      className={`row d-flex justify-content-between align-items-center ${styles.partnersHomeCont}`}
    >
      <Header title={title} subtitle={subtitle} color="orangeLibertex" />
      <LibertexBackgound customClass={`${styles.partnersBackgroundLeft}`} />
      <LibertexBackgound customClass={`${styles.partnersBackgroundRight}`} />
      <div className={`${styles.partnersInfoCont}`}>
        <div className="row d-flex justify-content-between align-items-center">
          <div className="col-6">
            <Image
              src="/images/Libertex.png"
              width="287"
              height="194"
              alt="Libertex Logo"
              className={styles.libertexLogos}
            />
          </div>
          <div className="col-5">
            <p className="general-text dark-blue-text">
              Simplemente con registrarte por este medio, obtenés el
              acompañamiento gratuito por 12 meses y acceso a nuestras
              operaciones en vivo
            </p>
            <button className={styles.libertexButton}>Registrarme</button>
          </div>
        </div>
        <div
          className={`row d-flex justify-content-between align-items-center ${styles.secondPartnerCont}`}
        >
          <div className={`col-6 ${styles.libertexLogos}`}>
            <p className="general-text dark-blue-text">
              Facundo Martínez <br/>Operador de mercados digitales <br/>Responsable del
              curso de trading avanzado
            </p>
            <button className={styles.libertexButton}>Contactar</button>
          </div>
          <div className="col-3">
            <Image
              src="/images/facuTradeLogo.png"
              width="130"
              height="128"
              alt="Libertex Logo"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
