import { useParams, Link } from 'react-router-dom';
import { useProduct } from '../hooks/useProduct';
import { useCart } from '../context/CartContext';
import { formatBRL } from '../utils/format';
import { Loading } from '../components/Loading';
import { PageTransition } from '../components/PageTransition';

export function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const { product, loading, error } = useProduct(Number(id));
  const { add } = useCart();

  if (loading) return <Loading />;
  if (error) return <p className="error">{error}</p>;
  if (!product) return null;

  return (
    <PageTransition>
      <div className="detail-page">
        <Link to="/" className="back-link">
          Voltar
        </Link>
        <div className="detail-content">
          <div className="detail-image">
            <img src={product.image} alt={product.title} />
          </div>
          <div className="detail-info">
            <span className="detail-category">{product.category}</span>
            <h1 className="detail-title">{product.title}</h1>
            <p className="detail-description">{product.description}</p>
            <p className="detail-price">{formatBRL(product.price)}</p>
            <p className="detail-rating">
              {product.rating.rate} / 5 ({product.rating.count} avaliações)
            </p>
            <button className="btn-add" onClick={() => add(product)}>
              Adicionar ao carrinho
            </button>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
