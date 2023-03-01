import Image from "next/image";
import styles from "../styles/componentsStyles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={`${styles.footerCont} font-small blue pt-4`}>
      <div className="container-fluid text-md-left">
        <div className="row">
          <div className="col-md-6 mt-md-0 mt-3 text-center">
            <h5 className="text-uppercase">Seguinos en nuestras redes:</h5>
            <div
              className={`d-flex justify-content-between align-items-center ${styles.socialMediaIconsCont}`}
            >
              <i class={`bi bi-instagram ${styles.socialIcons}`}></i>
              <i class={`bi bi-facebook ${styles.socialIcons}`}></i>
              {/* <i class="bi bi-twitter"></i> */}
              <i class={`bi bi-whatsapp ${styles.socialIcons}`}></i>
            </div>
          </div>

          <hr className="clearfix w-100 d-md-none pb-0" />

          <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase">Links</h5>
            <ul className="list-unstyled text-md-left">
              <li>
                <a href="#!" className={styles.noLink}>Servicios</a>
              </li>
              <li>
                <a href="#!" className={styles.noLink}>Cursos</a>
              </li>
              <li>
                <a href="#!" className={styles.noLink}>En Vivo</a>
              </li>
              <li>
                <a href="#!" className={styles.noLink}>Contacto</a>
              </li>
            </ul>
          </div>

          <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase">Contacto</h5>
            <ul className="list-unstyled ">
              <li>
                <a href="#!" className={styles.noLink}><i class="bi bi-envelope"> </i> skyeleven@gmail.com</a>
              </li>
              <li>
                <a href="#!" className={styles.noLink}><i class="bi bi-telephone"> </i> 2664446655</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={`${styles.footerCopy} text-center py-2`}>
        © 2023 Copyright: SKY ELEVEN TRADING SOLUTIONS S.A.S. | All Rights
        Reserved
      </div>
    </footer>
  );
}
