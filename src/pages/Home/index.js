import styles from './Home.module.scss';
import Header from 'components/Header';
import gamingDevices from 'assets/gaming-devices.jpg';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Home () {
  const navigate = useNavigate();
  const categories = useSelector(state => state.categories);

  return (
    <div>
      <Header
        titulo='Adquira seus produtos de gamer aqui!'
        imagem={gamingDevices}
        className={styles.header}
      />
      <div className={styles.categories}>
        <div className={styles['categories-title']}>
          <h1>Categorias:</h1>
        </div>
        <div className={styles['categories-container']}>
          {categories.map((category, index) => (
            <div key={index} onClick={() => navigate(`/categoria/${category.id}`)}>
              <h1>{category.name}</h1>
              <img src={category.image} alt={category.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
};
