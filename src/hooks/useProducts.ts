import { useState, useEffect } from 'react';
import { fetchProducts } from '../services/api';
import type { Product } from '../types';

export function useProducts(category: string) {
  const [all, setAll] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetchProducts()
      .then(setAll)
      .catch((err: Error) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const products =
    category && category !== 'all'
      ? all.filter(p => p.category === category)
      : all;

  return { products, loading, error };
}
