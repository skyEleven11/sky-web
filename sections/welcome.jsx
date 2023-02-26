import Image from "next/image";
import styles from "../styles/sectionsStyles/welcome.module.css";

export default function Welcome() {
  return (
    <section className={`row d-flex justify-content-between align-items-center ${styles.welcomeCont}`}>
        <div className="col-7">
        <h1 className={styles.company}>SKY ELEVEN</h1>
      <p className={styles.eslogan}>
        SOLUCIONES COMERCIALES CON SERVICIOS DE CALIDAD Y CON PROFESIONALES A TU
        ALCANCE
      </p>
      <button className="btn-sky">Saber Más</button>
        </div>
        <div className={`col-5 ${styles.illustrationCont}`}>
            <Image width="450" height="450" alt="Welcome Illustration" src="/images/welcome_illustration.png" />
        </div>
     
    </section>
  );
}
