import { useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import { Header } from './components/Header';
import { CartDrawer } from './components/CartDrawer';
import { Home } from './pages/Home';
import { ProductDetail } from './pages/ProductDetail';
import { Login } from './pages/Login';
import { useTheme } from './hooks/useTheme';

function AppRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const { dark, toggle } = useTheme();

  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <Header
            onCartOpen={() => setCartOpen(true)}
            dark={dark}
            onToggleTheme={toggle}
          />
          <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
          <AppRoutes />
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
