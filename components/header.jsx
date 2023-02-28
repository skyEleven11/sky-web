import styles from "../styles/componentsStyles/Header.module.css";

export default function Header({ title, subtitle, color }) {
  return (
    <div className={styles.headerCont}>
      <h4 className={styles.headerTitle}>{title}</h4>
      <p className={`${styles.headerSubTitle} ${styles[color]}`}>{subtitle}</p>
    </div>
  );
}
