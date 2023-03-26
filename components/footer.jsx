import Image from "next/image";
import Link from "next/link";
import styles from "../styles/componentsStyles/Footer.module.css";

export default function Footer() {
  return (
    <footer id="footer" className={`${styles.footerCont} font-small blue pt-4`}>
      <div className="container-fluid text-md-left">
        <div className="row">
          <div className="col-md-6 mt-md-0 mt-3 text-center">
            <h5 className="text-uppercase">Seguinos en nuestras redes:</h5>
            <div
              className={`d-flex justify-content-between align-items-center ${styles.socialMediaIconsCont}`}
            >
              <Link
                className={styles.noLink}
                href="https://www.instagram.com/skyeleventradingsolutions"
              >
                <i className={`bi bi-instagram ${styles.socialIcons}`}></i>
              </Link>
              <Link
                className={styles.noLink}
                href="https://www.facebook.com/sky.eleven.ts"
              >
                <i className={`bi bi-facebook ${styles.socialIcons}`}></i>
              </Link>
              <Link
                className={styles.noLink}
                href="https://api.whatsapp.com/send?phone=2664366288&text=Hola,%20Sky%20Eleven!%20"
              >
                <i className={`bi bi-whatsapp ${styles.socialIcons}`}></i>
              </Link>
              {/* <i class="bi bi-twitter"></i> */}
            </div>
          </div>

          <hr className="clearfix w-100 d-md-none pb-0" />

          <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase">Links</h5>
            <ul className="list-unstyled text-md-left">
              <li>
                <Link className={styles.noLink} href="/servicios">
                  Servicios
                </Link>
              </li>
              <li>
                <Link className={styles.noLink} href="/cursos">
                  Cursos
                </Link>
              </li>
              <li>
                <Link className={styles.noLink} href="/servicios#liveSessions">
                  En Vivo
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase">Contacto</h5>
            <ul className="list-unstyled ">
              <li>
                <a
                  href="mailto:skyelevensc@gmail.com"
                  className={styles.noLink}
                >
                  <i className="bi bi-envelope"> </i> skyelevensc@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+5492664366288" className={styles.noLink}>
                  <i className="bi bi-telephone"> </i> 2664366288
                </a>
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
