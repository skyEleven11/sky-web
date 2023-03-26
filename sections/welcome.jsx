import Image from "next/image";
import styles from "../styles/sectionsStyles/welcome.module.css";

export default function Welcome() {
  return (
    <section className={`row d-flex justify-content-between align-items-center ${styles.welcomeCont}`}>
        <div className="col-md-12 col-lg-7">
        <h1 className={styles.company}>SKY ELEVEN</h1>
      <p className={styles.eslogan}>
        SERVICIOS DE CALIDAD Y PROFESIONALES A TU ALCANCE
      </p>
      <button className="btn-sky"><a className={styles.buttonKnowMore} href="#ourCourses">Saber Más</a></button>
        </div>
        <div className={`col-5 d-none d-md-block ${styles.illustrationCont}`}>
            <Image width="450" height="450" alt="Welcome Illustration" src="/images/welcome_illustration.png" />
        </div>
     
    </section>
  );
}
