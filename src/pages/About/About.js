import styles from "./About.module.css";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className={styles.about_container}>
      <h2>
        Sobre o Mini <span>Blog</span>
      </h2>
      <p>
        Este projeto consiste em um blog feito com{" "}
        <span className={styles.react_span}>React </span>no Front-End e{" "}
        <span className={styles.firebase_span}>Firebase </span>no Back-End
      </p>
      <Link to="/posts/create" className={styles.button}>
        Crie seu primeiro post
      </Link>
    </div>
  );
};

export default About;
