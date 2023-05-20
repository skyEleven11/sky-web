import Image from "next/image";
import Link from "next/link";
import Header from "../components/header";
import styles from "../styles/sectionsStyles/ourClients.module.css";

export default function OurClients({ title, subtitle, messages }) {
  return (
    <section
      className={`row d-flex justify-content-between align-items-center ${styles.ourClientsCont}`}
    >
      <Header title={title} subtitle={subtitle} color="darkBlue"/>

      <div className={styles.messagesCont} data-aos="fade-up"
          data-aos-offset="100"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out">
        <div className={styles.messageAndClientCont}>
          <div className={`${styles.bubble} ${styles.bubbleRight}`}>
            <p className={styles.message}>
              Excelente servicio. Lo más importante es que constantemente se van
              perfeccionando y tienen un seguimiento personalizado hacia cada
              individuo, generando que uno continúe estudiando y aprendiendo.
            </p>
          </div>
          <div className={`${styles.clientImgAndNameCont} ${styles.clientRight}`}>
            <Image
              width="40"
              height={"40"}
              alt="Cliente"
              className={styles.clientImage}
              src="/images/Client1.jpeg"
            />
            <Link href="https://www.facebook.com/jyjnegocios.inmobiliarios.9?mibextid=ZbWKwL" className={styles.clientNameLink}>
              <p>J&J Negocios Inmobiliarios</p>
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.messagesCont} data-aos="fade-up"
          data-aos-offset="100"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out">
        <div className={styles.messageAndClientCont}>
          <div className={`${styles.bubble} ${styles.bubbleLeft}`}>
            <p className={styles.message}>
            Mi experiencia fue muy positiva ya que me ayudo a cambiar mi mente y forma de pensar. Hoy en día sigo utilizando las herramientas que aprendi en Sky Eleven.
            </p>
          </div>
          <div className={`${styles.clientImgAndNameCont} ${styles.clientLeft}`}>
            <Image
              width="40"
              height={"40"}
              alt="Cliente"
              className={styles.clientImage}
              src="/images/perfil.png"
            />
            <Link href="#" className={styles.clientNameLink}>
              <p>Ezequiel Basconcello</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
