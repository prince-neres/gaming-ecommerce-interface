import styles from './Header.module.scss';

export default function Header ({titulo, descricao, className = '', imagem}) {
  return (
    <header className={styles.header}>
      <div className={styles['header-text']}>
        <h1>{titulo}</h1>
        <p>{descricao}</p>
      </div>
        {imagem
        ? <div className={styles['header-image']}> 
            <img
                alt={titulo}
                src={imagem}
              />
          </div>
          : null
        }
    </header>
  )
};
