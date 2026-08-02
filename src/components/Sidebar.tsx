interface Props {
  categories: string[];
  selected: string;
  onSelect: (category: string) => void;
}

export function Sidebar({ categories, selected, onSelect }: Props) {
  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">Categorias</h2>
      <ul className="sidebar-list">
        <li>
          <button
            className={`sidebar-btn${selected === 'all' ? ' active' : ''}`}
            onClick={() => onSelect('all')}
          >
            Todos
          </button>
        </li>
        {categories.map(cat => (
          <li key={cat}>
            <button
              className={`sidebar-btn${selected === cat ? ' active' : ''}`}
              onClick={() => onSelect(cat)}
            >
              {cat}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
