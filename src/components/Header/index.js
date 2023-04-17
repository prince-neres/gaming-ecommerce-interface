import styles from "./Header.module.scss";

export default function Header({ titulo, descricao, imagem, component }) {
  return (
    <header className={styles.header}>
      <div className={styles["header-text"]}>
        <h1>{titulo}</h1>
        {component && component}
        <p>{descricao}</p>
      </div>
      {imagem ? (
        <div className={styles["header-image"]}>
          <img alt={titulo} src={imagem} />
        </div>
      ) : null}
    </header>
  );
}
