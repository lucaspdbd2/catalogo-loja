import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { formatBRL } from '../utils/format';
import type { Product } from '../types';

interface Props {
  product: Product;
}

export function ProductCard({ product }: Props) {
  const { add } = useCart();

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="product-card-link">
        <div className="product-card-image">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="product-card-info">
          <h3 className="product-card-title">{product.title}</h3>
          <span className="product-card-price">{formatBRL(product.price)}</span>
        </div>
      </Link>
      <button className="btn-add" onClick={() => add(product)}>
        Adicionar ao carrinho
      </button>
    </div>
  );
}
