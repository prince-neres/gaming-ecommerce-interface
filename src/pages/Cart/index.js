import styles from './Cart.module.scss';
import Header from 'components/Header';
import { useSelector, useDispatch } from 'react-redux';
import Product from 'components/Product';
import { resetCart } from 'store/reducers/cart';

export default function Cart () {
  const dispatch = useDispatch()
  const { cart, total } = useSelector(state => {
    let total = 0
    const regx = new RegExp(state.search)
    const cartReduce = state.cart.reduce((products, productInCart) => {
      const product = state.products.find(product => product.id === productInCart.id);
      total += (product.price * productInCart.quantity);

      if(product.name.match(regx)) {
        products.push({
          ...product,
          quantity: productInCart.quantity,
        })
      }

      return products;
    }, []);
    return {
      cart: cartReduce,
      total
    };
  });

  return (
    <div>
      <Header
        titulo='Carrinho de Compras'
        descricao='Confira os produtos que você adicionou ao carrinho:'
        className={styles.header}
      />
      <div className={styles.cart}>
        {cart.map(product => <Product key={product.id} {...product} cart />)}
        <div className={styles.total}>
          <strong>Resumo da compra</strong>
          <span>
            Subtotal: <strong>R$ {total.toFixed(2)}</strong>
          </span>
        </div>
        {total
          ? 
            <button
              className={styles.finally}
              onClick={() => dispatch(resetCart())}
            >
              Finalizar compra
            </button>
          : null
        }
      </div>
    </div>
  )
};
