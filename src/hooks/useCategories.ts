import { useState, useEffect } from 'react';
import { fetchCategories } from '../services/api';

export function useCategories() {
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    fetchCategories()
      .then(setCategories)
      .catch(() => {});
  }, []);

  return categories;
}
