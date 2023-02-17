import styles from './Cart.module.scss';
import Header from 'components/Header';
import { useSelector } from 'react-redux';
import Product from 'components/Product';

export default function Cart () {

  const cart = useSelector(state => {
    const cartReduce = state.cart.reduce((products, productInCart) => {
      const product = state.products.find(product => product.id === productInCart.id);
      products.push({
        ...product,
        quantity: productInCart.quantity,
      })
      return products;
    }, []);
    return cartReduce;
  });

  console.log(cart)

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
            Subtotal: <strong>R$ {0.0.toFixed(2)}</strong>
          </span>
        </div>
      </div>
    </div>
  )
};
