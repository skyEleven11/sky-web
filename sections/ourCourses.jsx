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
          <p className={styles.message}>
            Excelente servicio. Lo más importante es que constantemente se van
            perfeccionando y tienen un seguimiento personalizado hacia cada
            individuo, generando que uno continúe estudiando y aprendiendo.
          </p>
        </div>
      </section>
    )
  );
}
