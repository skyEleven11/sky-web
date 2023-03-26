import Image from "next/image";
import Header from "../components/header";
import styles from "../styles/sectionsStyles/ourTeam.module.css";

export default function OurTeam({ title, subtitle, team }) {
  return (
    <section
      className={`row d-flex justify-content-between align-items-center ${styles.teamHomeCont}`}
    >
      <Header title={title} subtitle={subtitle} color="darkBlue" />
      <div className={styles.teamCont}>
        {team &&
          team[0] &&
          team.map((member,i) => (
            <>
              <div className={styles.teamCard} key={i + (new Date).getTime()}>
                <Image
                  src={`/images/team/${member.IMAGEN}`}
                  alt="Sky Eleven miembro del equipo"
                  width="260"
                  height="260"
                />
                <div className={styles.teamMemberInfo}>
                  <h6 className={`small-headers ${styles.colorDwBlue}`}>
                   {member.NOMBRE ? member.NOMBRE.toUpperCase() : ""}
                  </h6>
                  <p className="general-text white-blue-text text-center">
                  {member.ROL}
                    <br /> {member.PROFESION}
                  </p>
                </div>
              </div>
            </>
          ))}
      </div>
    </section>
  );
}
