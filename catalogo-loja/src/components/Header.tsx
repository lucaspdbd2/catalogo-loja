import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/" className="header-logo">
          Loja
        </Link>
        <nav className="header-nav">
          <Link to="/">Produtos</Link>
        </nav>
      </div>
    </header>
  );
}
