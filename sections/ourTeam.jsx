import Image from "next/image";
import Header from "../components/header";
import styles from "../styles/sectionsStyles/ourTeam.module.css";

export default function OurTeam({ title, subtitle, team }) {
  return (
    <section
      className={`row d-flex justify-content-between align-items-center ${styles.teamHomeCont}`}
    >
      <Header title={title} subtitle={subtitle} color="darkBlue"/>
      <div className={styles.teamCont}>
        <div className={styles.teamCard}>
          <Image
            src="/images/Team_01.png"
            alt="Sky Eleven miembro del equipo"
            width="260"
            height="260"
          />
          <div className={styles.teamMemberInfo}>
            <h6 className={`small-headers ${styles.colorDwBlue}`}>
              Gustavo Sangra
            </h6>
            <p className="general-text white-blue-text text-center">
              Coordinador General
              <br /> Contador Publico
            </p>
          </div>
        </div>

        <div className={styles.teamCard}>
          <Image
            src="/images/Team_01.png"
            alt="Sky Eleven miembro del equipo"
            width="260"
            height="260"
          />
          <div className={styles.teamMemberInfo}>
            <h6 className={`small-headers ${styles.colorDwBlue}`}>
              Gustavo Sangra
            </h6>
            <p className="general-text white-blue-text text-center">
              Coordinador General
              <br /> Contador Publico
            </p>
          </div>
        </div>

        <div className={styles.teamCard}>
          <Image
            src="/images/Team_01.png"
            alt="Sky Eleven miembro del equipo"
            width="260"
            height="260"
          />
          <div className={styles.teamMemberInfo}>
            <h6 className={`small-headers ${styles.colorDwBlue}`}>
              Gustavo Sangra
            </h6>
            <p className="general-text white-blue-text text-center">
              Coordinador General
              <br /> Contador Publico
            </p>
          </div>
        </div>

        <div className={styles.teamCard}>
          <Image
            src="/images/Team_01.png"
            alt="Sky Eleven miembro del equipo"
            width="260"
            height="260"
          />
          <div className={styles.teamMemberInfo}>
            <h6 className={`small-headers ${styles.colorDwBlue}`}>
              Gustavo Sangra
            </h6>
            <p className="general-text white-blue-text text-center">
              Coordinador General
              <br /> Contador Publico
            </p>
          </div>
        </div>

        <div className={styles.teamCard}>
          <Image
            src="/images/Team_01.png"
            alt="Sky Eleven miembro del equipo"
            width="260"
            height="260"
          />
          <div className={styles.teamMemberInfo}>
            <h6 className={`small-headers ${styles.colorDwBlue}`}>
              Gustavo Sangra
            </h6>
            <p className="general-text white-blue-text text-center">
              Coordinador General
              <br /> Contador Publico
            </p>
          </div>
        </div>

        <div className={styles.teamCard}>
          <Image
            src="/images/Team_01.png"
            alt="Sky Eleven miembro del equipo"
            width="260"
            height="260"
          />
          <div className={styles.teamMemberInfo}>
            <h6 className={`small-headers ${styles.colorDwBlue}`}>
              Gustavo Sangra
            </h6>
            <p className="general-text white-blue-text text-center">
              Coordinador General
              <br /> Contador Publico
            </p>
          </div>
        </div>

        <div className={styles.teamCard}>
          <Image
            src="/images/Team_01.png"
            alt="Sky Eleven miembro del equipo"
            width="260"
            height="260"
          />
          <div className={styles.teamMemberInfo}>
            <h6 className={`small-headers ${styles.colorDwBlue}`}>
              Gustavo Sangra
            </h6>
            <p className="general-text white-blue-text text-center">
              Coordinador General
              <br /> Contador Publico
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
