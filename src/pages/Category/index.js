import Header from 'components/Header';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import style from './Category.module.scss'

export default function Category() {
  const { nomeCategoria } = useParams();
  const { category, products } = useSelector(state =>({
    category: state.categories.find(category => category.id === nomeCategoria),
    products: state.products.filter(product => product.category === nomeCategoria),
  }));

  return (
    <div>
      <Header
        titulo={category.name}
        descricao={category.description}
        imagem={category.image}
      />
      <div className={style.products}>
        {products?.map(product => (
          <div key={product.id}>
            {product.name}
          </div>
        ))}
      </div>
    </div>
  )
};
