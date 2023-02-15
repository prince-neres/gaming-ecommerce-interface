import styles from './Home.module.scss';
import Header from 'components/Header';
import gamesBanner from 'assets/banner-games.jpg'

export default function Home () {
  return (
    <div>
      <Header
        titulo="Jogos"
        descrição="Adquira seus games aqui!"
        imagem={gamesBanner}
      />
    </div>
  )
};
