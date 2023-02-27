import Header from "../components/header";
import styles from "../styles/sectionsStyles/ourCourses.module.css";

export default function OurCourses({ title, subtitle, courses }) {
  return (
    <section
      className={`row d-flex justify-content-between align-items-center ${styles.ourCoursesCont}`}
    >
      <Header title={title} subtitle={subtitle} />
      <div class="timeline">
        <div class="container left">
          <div class="content">
            <h2>2017</h2>
            <p>Lorem ipsum..</p>
          </div>
        </div>
        <div class="container right">
          <div class="content">
            <h2>2016</h2>
            <p>Lorem ipsum..</p>
          </div>
        </div>
      </div>
    </section>
  );
}
