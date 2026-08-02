import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

interface Props {
  onCartOpen: () => void;
  dark: boolean;
  onToggleTheme: () => void;
}

export function Header({ onCartOpen, dark, onToggleTheme }: Props) {
  const { count } = useCart();
  const { username, logout } = useAuth();

  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/" className="header-logo">
          Loja
        </Link>
        <nav className="header-nav">
          <Link to="/">Produtos</Link>
          {username ? (
            <>
              <span className="header-user">{username}</span>
              <button className="btn-link" onClick={logout}>
                Sair
              </button>
            </>
          ) : (
            <Link to="/login">Login</Link>
          )}
          <button className="theme-btn" onClick={onToggleTheme} title="Alternar tema">
            {dark ? 'Claro' : 'Escuro'}
          </button>
          <button className="cart-btn" onClick={onCartOpen}>
            Carrinho
            {count > 0 && <span className="cart-badge">{count}</span>}
          </button>
        </nav>
      </div>
    </header>
  );
}
