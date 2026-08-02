import { useCart } from '../context/CartContext';
import { formatBRL } from '../utils/format';

interface Props {
  open: boolean;
  onClose: () => void;
}

export function CartDrawer({ open, onClose }: Props) {
  const { items, remove, increment, decrement, clear, total } = useCart();

  return (
    <>
      {open && <div className="drawer-overlay" onClick={onClose} />}
      <div className={`cart-drawer${open ? ' open' : ''}`}>
        <div className="cart-drawer-header">
          <h2>Carrinho</h2>
          <button className="cart-close" onClick={onClose}>X</button>
        </div>

        {items.length === 0 ? (
          <p className="cart-empty">Seu carrinho está vazio.</p>
        ) : (
          <>
            <ul className="cart-list">
              {items.map(item => (
                <li key={item.id} className="cart-item">
                  <img src={item.image} alt={item.title} className="cart-item-img" />
                  <div className="cart-item-info">
                    <p className="cart-item-title">{item.title}</p>
                    <span className="cart-item-price">{formatBRL(item.price)}</span>
                    <div className="cart-item-qty">
                      <button onClick={() => decrement(item.id)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => increment(item.id)}>+</button>
                    </div>
                  </div>
                  <button className="cart-item-remove" onClick={() => remove(item.id)}>
                    Remover
                  </button>
                </li>
              ))}
            </ul>
            <div className="cart-footer">
              <p className="cart-total">
                Total: <strong>{formatBRL(total)}</strong>
              </p>
              <button className="btn-clear" onClick={clear}>
                Limpar carrinho
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
