import styles from './Home.module.scss';
import Header from 'components/Header';
import gamesBanner from 'assets/banner-games.jpg';
import gamingDevices from 'assets/gaming-devices.jpg';
import { useNavigate } from 'react-router-dom';

const categories = [{
  id: "Jogos",
  name: "Jogos",
  description: "Os melhores e mais populares jogos estão aqui!",
  thumbnail: gamesBanner
}]

export default function Home () {

  const navigate = useNavigate()

  return (
    <div>
      <Header
        titulo="Adquira seus produtos de gamer aqui!"
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
              <img src={category.thumbnail} alt={category.name} />
              <h1>{category.name}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
};
