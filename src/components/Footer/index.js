import styles from './Footer.module.scss';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram
} from 'react-icons/fa'

const iconeProps = {
  color: 'white',
  size: 24
}

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <FaFacebook {...iconeProps} />
        <FaTwitter {...iconeProps} />
        <FaInstagram {...iconeProps} />
      </div>
      <span>
        Desenvolvido por
        <a href='https://github.com/prince-neres' target='_blank' rel="noreferrer"> @Prince Neres</a> - 2023
      </span>
    </footer>
  )
};
