import { useState } from 'react';
import { useProducts } from '../hooks/useProducts';
import { useCategories } from '../hooks/useCategories';
import { useDebounce } from '../hooks/useDebounce';
import { ProductCard } from '../components/ProductCard';
import { Sidebar } from '../components/Sidebar';
import { Loading } from '../components/Loading';
import { PageTransition } from '../components/PageTransition';

export function Home() {
  const [category, setCategory] = useState('all');
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search, 300);
  const { products, loading, error } = useProducts(category);
  const categories = useCategories();

  const filtered = debouncedSearch
    ? products.filter(p =>
        p.title.toLowerCase().includes(debouncedSearch.toLowerCase())
      )
    : products;

  return (
    <PageTransition>
      <div className="home">
        <Sidebar categories={categories} selected={category} onSelect={setCategory} />
        <main className="product-section">
          <div className="search-wrapper">
            <input
              type="text"
              className="search-input"
              placeholder="Buscar produtos..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
          {loading && <Loading />}
          {error && <p className="error">{error}</p>}
          {!loading && !error && (
            <div className="product-grid">
              {filtered.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}
        </main>
      </div>
    </PageTransition>
  );
}
