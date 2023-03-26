import { Container } from "react-bootstrap";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Link from "next/link";
import { useEffect, useState } from "react";
import Certicate_Illustration from "../../components/illustrations/Certicate_Illustration";
import styles from "../../styles/pagesStlyes/Courses.module.css";
import dynamic from "next/dynamic";
import GeneralSkeleton from "../../components/generalSkeleton";
export default function Couses() {
  const [courses, setCourses] = useState([{}]);
  const [illustration, setIllustration] = useState();
  const [showLoader, setShowLoader] = useState(true)

  useEffect(() => {
    const excelRequest = async () => {
      try {
        const response = await (await fetch("/api/courses")).json();
        setCourses(response);
        setShowLoader(false)
      } catch (err) {
        console.log("err-->", err);
      }
    };
    excelRequest();
  }, []);

  useEffect(() => {
    if (courses[1]) {
      const illArray = [];
      courses.map((illustration) => {
        const DynamicIllustration = dynamic(() =>
          import(`../../components/illustrations/${illustration.ILUSTRACION}`, {
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



  return showLoader ? (
    <GeneralSkeleton showLoader={showLoader}/>
  ) : (
    <>
      <Container className="content-cont">
        
        <section
          className={`row d-flex justify-content-between align-items-center ${styles.coursesCont}`}
        >
          <Header
            title={"Nuestros Cursos"}
            subtitle={"EDUCACIÓN SIN LÍMITES"}
            color="darkBlue"
          />
          <div className={styles.timeline}>
            {courses &&
            courses[0] && courses.map((course, i)=>(
              <>
               {course.ACTIVO === "ACTIVO" ? (
                  <div className={`${styles.individualCourseCont} ${i%2 === 0 ? styles.left : styles.right}`}>
                  <div className={i%2 === 0 ?  styles.barRight : styles.barLeft}></div>
                  <div className={styles.content}>
                    <h6 className="small-headers dark-blue-text">{course.NOMBRE}</h6>
                    <p className="general-text dark-blue-text">
                    {course.DEFINICION_BREVE}
                    </p>
                    <Link href={`${course.SABER_MAS}?curso=${course.ID}`}>
                       <button className="btn-sky">Saber Más</button>
                     </Link>
                  </div>
                  <div className={` ${i%2 === 0 ? styles.ilustrationRight : styles.ilustrationLeft}`}>
                  {illustration && illustration[i]}
                  </div>
                </div>
               ) : (
                <></>
               )}
               </>
            ))}
          </div>
          <div className={styles.certificateBox}>
            <Certicate_Illustration customClass={styles.cartificateIllust} />
            <p className="general-text dark-blue-text">
              Entre todos los beneficios que tenemos para darte ademas
              incluiremos un certificado cuando allas terminado el curso.
              Certificarte y sobre todo de la mano de{" "}
              <span className={styles.libertex}>Libertex</span> puede abrirte
              muchas puertas en el mundo del Trading
            </p>
          </div>
        </section> 
      </Container>
      <Footer />
    </>
  );
}
