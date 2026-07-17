import { useProducts } from '../hooks/useProducts';
import { ProductCard } from '../components/ProductCard';

export function Home() {
  const { products, loading, error } = useProducts('all');

  return (
    <div className="home">
      <main className="product-section">
        {loading && <p>Carregando...</p>}
        {error && <p className="error">{error}</p>}
        {!loading && !error && (
          <div className="product-grid">
            {products.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
