import styles from './Navbar.module.scss';
import classNames from 'classnames';
import { RiShoppingCart2Line, RiShoppingCartFill } from 'react-icons/ri';
import { GiConsoleController } from 'react-icons/gi';
import Search from 'components/Search';
import { Link, useLocation, useNavigate } from 'react-router-dom';


const iconeProps = {
  color: 'white',
  size: 30
};

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav className={styles.nav}>
      <span className={styles.logo} onClick={() => navigate('/')}>
        <GiConsoleController {...iconeProps} size={60} />
      </span>
      <div className={styles.links}>
        <div>
          <Link to='/' className={classNames(styles.link, {
            [styles.selected]: location.pathname === '/'
          })}>
            Página inicial
          </Link>
        </div>
      </div>
      <div className={styles.search}>
        <Search />
      </div>
      <div className={styles.icons}>
        <a href='/carrinho'>
          {window.location.pathname === '/carrinho'
            ? <RiShoppingCartFill {...iconeProps} />
            : <RiShoppingCart2Line {...iconeProps} />
          }
        </a>
      </div>
    </nav>
  )
};
