import styles from './Product.module.scss';
import { 
  AiOutlineHeart,
  AiFillHeart
} from 'react-icons/ai'
import { FaCartPlus, FaFireAlt } from 'react-icons/fa'

const iconeProps = {
  size: 24,
  color: '#ff7300'
}

export default function Product(props) {
  const {
    name,
    price,
    score,
    image,
    favorite
  } = props

  return (
    <div className={styles.product}>
      <div className={styles['product.image']}>
        <img src={image} alt={name} />
      </div>
      <div className={styles['product-name']}>
        <h2>{name}</h2>
      </div>
      <div className={styles['product-score']}>
        <span><FaFireAlt {...iconeProps} /></span>
        <p>{score}</p>
      </div>
      <div className={styles['product-info']}>
        <div className={styles['product-price']}>
          R$ {price.toFixed(2)}
        </div>
        <div className={styles['product-actions']}>
          <span className={styles['product-action']}>
            {favorite
              ? <AiFillHeart {...iconeProps} color='#FF0000' />
              : <AiOutlineHeart {...iconeProps} />
            }
          </span>
          <span className={styles['product-action']}>
            <FaCartPlus
              {...iconeProps}
              color={true ? iconeProps.color : '#008000'}
            />
          </span>
        </div>
      </div>
    </div>
  )
};
