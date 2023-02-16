import Header from 'components/Header';
import Product from 'components/Product';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styles from './Category.module.scss'

export default function Category() {
  const { nomeCategoria } = useParams();
  const { category, products } = useSelector(state =>({
    category: state.categories.find(category => category.id === nomeCategoria),
    products: state.products.filter(product => product.category === nomeCategoria),
  }));

  return (
    <div>
      <Header
        className={styles.header}
        titulo={category.name}
        descricao={category.description}
      />
      <div className={styles.products}>
        {products?.map(product => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </div>
  )
};
