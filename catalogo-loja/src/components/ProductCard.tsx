import { formatBRL } from '../utils/format';
import type { Product } from '../types';

interface Props {
  product: Product;
}

export function ProductCard({ product }: Props) {
  return (
    <div className="product-card">
      <div className="product-card-image">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-card-info">
        <h3 className="product-card-title">{product.title}</h3>
        <span className="product-card-price">{formatBRL(product.price)}</span>
      </div>
    </div>
  );
}
