import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import { Outlet } from 'react-router-dom';
import styles from './DefaultPage.module.scss';

export default function DefaultPage() {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles['conainer-outlet']}>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
};
