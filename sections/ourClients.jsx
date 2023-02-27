import Header from "../components/header";
import styles from "../styles/sectionsStyles/ourClients.module.css";

export default function OurClients({ title, subtitle, messages }) {
  return (
    <section
      className={`row d-flex justify-content-between align-items-center ${styles.ourClientsCont}`}
    >
      <Header title={title} subtitle={subtitle} />

      <div className={styles.messagesCont}>
        <div class={`${styles.bubble} ${styles.bubbleLeft}`}>
          <p className={styles.message}>
            Mi experiencia sobre Sky Eleven fue muy positiva ya que me ayudo a
            cambiar mi mente y forma de pensar.<br/>Todas las herramientas que me
            brindo hoy en día lo sigo utilizando.
          </p>
        </div>
        <div class={`${styles.bubble} ${styles.bubbleRight}`}>
          <p className={styles.message}>
            Mi experiencia sobre Sky Eleven fue muy positiva ya que me ayudo a
            cambiar mi mente y forma de pensar.<br/>Todas las herramientas que me
            brindo hoy en día lo sigo utilizando.
          </p>
        </div>
      </div>
    </section>
  );
}
