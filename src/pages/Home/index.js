import styles from "./Home.module.scss";
import Header from "components/Header";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header
        titulo="Bem vindo!"
        component={
          <p>
            Copyright © 2023{" "}
            <a
              href="https://prince-neres.space"
              target="_blank"
              className={styles.link}
              rel="noreferrer"
            >
              prince-neres.space.{" "}
            </a>{" "}
            Todos os direitos reservados.
          </p>
        }
      />
    </div>
  );
}
