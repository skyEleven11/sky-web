import dynamic from "next/dynamic";
import Link from "next/link";
import { useEffect, useState } from "react";
import Header from "../components/header";
import CursoIntegral_illustation from "../components/illustrations/CursoIntegral_illustation";
import styles from "../styles/sectionsStyles/ourCourses.module.css";

export default function OurCourses({ title, subtitle, courses }) {
  const [illustration, setIllustration] = useState();

  useEffect(() => {
    if (courses[1]) {
      const illArray = [];
      courses.map((illustration) => {
        const DynamicIllustration = dynamic(() =>
          import(`../components/illustrations/${illustration.ILUSTRACION}`, {
            ssr: false,
          })
        );
        illArray.push(
          <DynamicIllustration customClass={styles.courseIllustrarionSize} />
        );
      });
      setIllustration(illArray);
    }
  }, [courses]);

  return (
    courses[1] && (
      <section id="ourCourses"
        className={`row d-flex justify-content-between align-items-center ${styles.ourCoursesCont}`}
      >
        <Header title={title} subtitle={subtitle} color="darkBlue" />
        <div className={styles.timeline}>
          {courses &&
            courses[0] &&
            courses.map((course, i) => (
              <>
              {course.ACTIVO === "ACTIVO" ? (
                   <div
                   className={`${styles.individualCourseCont} ${
                     i % 2 === 0
                       ? styles.left
                       : `${styles.right} flex-row-reverse`
                   }`}
                   key={i + new Date().getTime()}
                 >
                   <div className={styles.content}>
                     <h6 className="small-headers white-blue-text">
                       {course.NOMBRE}
                     </h6>
                     <p className="general-text white-blue-text">
                       {course.DEFINICION_BREVE}
                     </p>
                     <Link href={`${course.SABER_MAS}?curso=${course.ID}`}>
                       <button className="btn-sky">Saber Más</button>
                     </Link>
                   </div>
                   {illustration && illustration[i]}
                 </div>
              ) : (
                <></>
              )}
               
              </>
            ))}
        </div>
        <div className={`${styles.bubble} ${styles.bubbleRight}`}>
          <p className={styles.message} style={{marginTop: "10px"}}>
            Informate mediante los foros oficiales de nuestros profesionales: 
            <ul>
              <a href="https://es.investing.com/analysis/bitcoin-muestra-senales-bajistas-200460407" style={{color: "#fff", marginLeft: "10px"}}>Noticias 1</a>
             <a href="https://es.investing.com/analysis/sp-500-proyeccion-de-canal-o-lateral-200460570" style={{color: "#fff", marginLeft: "10px"}}>Noticias 2</a>
              <a href="https://es.investing.com/analysis/bitcoin-rapido-vistazo-a-niveles-clave-200460958" style={{color: "#fff", marginLeft: "10px"}}>Noticias 3</a>
            </ul>
          </p>
        </div>
      </section>
    )
  );
}
