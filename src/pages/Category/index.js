import Header from 'components/Header';
import Product from 'components/Product';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styles from './Category.module.scss'

export default function Category() {
  const { nameCategory } = useParams();
  const { category, products } = useSelector(state => {

    const regx = new RegExp(state.search, 'i');

    return {
      category: state.categories.find(category => category.id === nameCategory),
      products: state.products.filter(product => product.category === nameCategory && product.name.match(regx)),
    }
  });

  const products_ordered = products.sort(function (a, b) {
    return b.score - a.score
  });

  return (
    <div>
      <Header
        className={styles.header}
        titulo={category.name}
        descricao={category.description}
      />
      <div className={styles.products}>
        {products_ordered?.map(product => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </div>
  )
};
