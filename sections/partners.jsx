import Image from "next/image";
import Link from "next/link";
import Header from "../components/header";
import LibertexBackgound from "../components/illustrations/LibertexBackgound";
import styles from "../styles/sectionsStyles/partners.module.css";

export default function Partners({ title, subtitle }) {
  return (
    <section
      className={`row d-flex justify-content-between align-items-center ${styles.partnersHomeCont}`}
    >
      <Header title={title} subtitle={subtitle} color="orangeLibertex" />
      <LibertexBackgound customClass={`${styles.partnersBackgroundLeft} d-none d-md-block`} />
      <LibertexBackgound customClass={`${styles.partnersBackgroundRight} d-none d-md-blocks`} />
      <div className={`${styles.partnersInfoCont}`}>
        <div className={`row d-flex justify-content-between align-items-center ${styles.partnerInfo}`} >
          <div className="col-md-12 col-lg-6">
            <Image
              src="/images/Libertex.png"
              width="287"
              height="194"
              alt="Libertex Logo"
              className={styles.libertexLogos}
            />
          </div>
          <div className={`col-md-12 col-lg-5`}>
            <p className="general-text dark-blue-text">
              Simplemente con registrarte por este medio, obtenés el
              acompañamiento gratuito por 12 meses y acceso a nuestras
              operaciones en vivo
            </p>
            <Link
              href={
                "https://promo.libertex.org/lp/es-lm/brand/?aff_id=52900&cxd=52900_602455"
              }
            >
              <button className={styles.libertexButton}>Registrarme</button>
            </Link>
          </div>
        </div>
        <div
          className={`row d-flex justify-content-between align-items-center ${styles.secondPartnerCont} ${styles.partnerInfo}`}
        >
          <div className={`col-md-12 col-lg-6 ${styles.libertexLogos}`}>
            <p className="general-text dark-blue-text">
              Facundo Martínez <br />
              Operador de mercados digitales <br />
              Responsable del curso de trading avanzado
            </p>
            <Link
              href={
                "https://wa.link/4h4tdr"
              }
            >
              <button className={styles.libertexButton}>Contactar</button>
            </Link>
          </div>
          <div className="col-md-12 col-lg-3">
            <Image
              src="/images/facuTradeLogo.png"
              width="130"
              height="128"
              alt="Libertex Logo"
              className={styles.facuImg}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
