import Link from "next/link";
import styles from "/styles/Home.module.css";

export default function About() {
  return (
    <>
  <h1>Me llamo Juan y soy peruano.</h1>
  <nav className={styles.nav}>
  <Link href="/" >Home</Link>
  </nav>
  </>
  );
}
