import { useRouter } from "next/router";
import { Container } from "react-bootstrap";
import Header from "../../components/header";

import styles from "../../styles/pagesStlyes/Services.module.css";
export default function IndividualViewService() {
    const router = useRouter()
    const { indService } = router.query
   
  return (
    <Container className="content-cont">
      <section
        className={`row d-flex justify-content-between align-items-center ${styles.serviceCont}`}
      >
        <Header
          title={indService ? indService.replaceAll("_"," ") : ""}
          subtitle={"La Mejor atencion y servicio"}
          color="darkBlue"
        />

        <div className={`row d-flex justify-content-between align-items-center ${styles.individualServiceCont}`}>
          <div className={`col-6`}></div>
          <div className={`col-6`}></div>
          <div className={`col-6`}></div>
          <div className={`col-6`}></div>
        </div>
        
      </section>
    </Container>
  );
}
