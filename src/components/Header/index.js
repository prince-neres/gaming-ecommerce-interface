import styles from './Header.module.scss';

export default function Header ({titulo, descricao, className = '', imagem}) {
  return (
    <header className={`${styles.header} ${className}`}>
      <div className={styles['header-texto']}>
        <h1>{titulo}</h1>
        <p>{descricao}</p>
      </div>
        {imagem
        ? <div className={styles['header-imagem']}> 
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
