import Image from "next/image";
import Header from "../components/header";
import UsBackground_illustration from "../components/illustrations/UsBackground_illustration";
import styles from "../styles/sectionsStyles/aboutUs.module.css";

export default function AboutUs({ title, subtitle }) {
  return (
    <section id="us"
      className={`row d-flex justify-content-between align-items-center ${styles.aboutUsHomeCont}`}
    >
      <Header title={title} subtitle={subtitle} color="darkBlue"/>
      <UsBackground_illustration customClass={`${styles.aboutUsBackground} d-none d-md-block`} />
      <div
        className={`row d-flex justify-content-between align-items-center ${styles.aboutUsInfoCont}`}
      >
        <div className="col-md-12 col-lg-6">
          <p className="general-text dark-blue-text">
            Somos un equipo de profesionales con una misma perspectiva, brindar
            soluciones comerciales en la mayoría de las actividades económicas
            de nuestros clientes, educando, acompañando, y mejorando todo
            aspecto que sea posible.
          </p>
          <h6 className="small-headers dark-blue-text">Mision</h6>
          <p className="general-text dark-blue-text">
            Contribuir al crecimiento económico y educativo de personas y
            organizaciones brindando servicios profesionales de calidad.
          </p>
          <h6 className="small-headers dark-blue-text">Vision</h6>
          <p className="general-text dark-blue-text">
          Posicionarnos como los referentes en crecimiento comercial, económico y educativo bajo relaciones de confianza a largo plazo.
          </p>
        </div>
        <div className="col-md-12 col-lg-5">
          <Image
            src="/images/Us_Illustration.png"
            alt="Que es Sky Eleven"
            width="460"
            height="336"
            className={styles.imageAbout}
          />
        </div>
      </div>
    </section>
  );
}
