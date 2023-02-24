import styles from './Product.module.scss';
import { 
  AiOutlineHeart,
  AiFillHeart,
  AiFillMinusCircle,
  AiFillPlusCircle,
} from 'react-icons/ai'
import { FaCartPlus, FaFireAlt, FaTrashAlt } from 'react-icons/fa'
import { changeFavorite } from 'store/reducers/products';
import { useDispatch, useSelector } from 'react-redux';
import { changeCart, changeQuantity } from 'store/reducers/cart';
import classNames from 'classnames';


const iconeProps = {
  size: 24,
  color: '#ff7300'
}

const quantityProps = {
  size: 32,
  color: '#ff7300'
}

export default function Product(props) {
  const {
    id,
    name,
    price,
    score,
    image,
    favorite,
    cart,
    quantity,
  } = props

  const dispatch = useDispatch();

  const haveInCart = useSelector(state => state.cart.some(productInCart => productInCart.id === id))

  const resolveFavorite = () => {
    dispatch(changeFavorite(id));
  };

  const resolveCart = () => {
    dispatch(changeCart(id));
  };

  return (
    <div className={classNames(styles.product, {
      [styles.productInCart]: cart,
    })}>
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
          {Intl.NumberFormat('pt-BR', { currency: 'BRL', style: 'currency' }).format(price)}
        </div>
        <div className={styles['product-actions']}>
          <span className={styles['product-action']}>
            {favorite
              ? <AiFillHeart {...iconeProps} color='#FF0000' onClick={resolveFavorite} />
              : <AiOutlineHeart {...iconeProps} onClick={resolveFavorite} />
            }
          </span>
          {cart
            ? <span className={styles['product-action']}>
                <FaTrashAlt
                  size={20}
                  color={'FF0000'}
                  onClick={resolveCart}
                />
              </span>
            : null
          }
          <span className={styles['product-action']}>
            {cart
              ? (
                <div className={styles.amount}>
                  Quantidade:
                  <AiFillMinusCircle
                    {...quantityProps}
                    onClick={() => {
                      if(quantity >= 1) {
                        dispatch(changeQuantity({ id, quantity: -1 }));
                      }
                    }}
                  />
                  <span>{String(quantity)}</span>
                  <AiFillPlusCircle
                    {...quantityProps}
                    onClick={() => dispatch(changeQuantity({ id, quantity: +1 }))}
                  />
                </div>
              )
              : (<FaCartPlus
                  {...iconeProps}
                  color={haveInCart ? '#008000' : iconeProps.color}
                  onClick={resolveCart}
                />)
            }
          </span>
        </div>
      </div>
    </div>
  )
};
