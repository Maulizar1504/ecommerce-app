// src/components/Header.jsx
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
export default function Header() {
 const { totalItems } = useCart();
 return (
 <header style={{
 background: 'linear-gradient(90deg, #1f8fd8, #0e4b8f)',
 color: 'white',
 padding: '0.9rem 2rem',
 display: 'flex',
 justifyContent: 'space-between',
 alignItems: 'center',
 boxShadow: '0 4px 15px rgba(12, 30, 73, 0.35)',
 borderBottom: '2px solid rgba(255,255,255,0.25)',
 position: 'sticky',
 top: 0,
 zIndex: 100,
 }}>
 <Link to='/' style={{ color: 'white', textDecoration: 'none' }}>
 <h1 style={{ margin: 0, fontSize: '1.5rem', letterSpacing: '1px' }}>CBSE Store</h1>
 </Link>
 <nav style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', fontWeight: 500 }}>
 <Link to='/' style={{ color: 'white', textDecoration: 'none', padding: '0.3rem 0.5rem', borderRadius: '6px', background: 'rgba(255,255,255,0.12)' }}>Home</Link>
 <Link to='/cart' style={{ color: 'white', textDecoration: 'none' }}>
 Cart ({totalItems})
 </Link>
 </nav>
 </header>
 );
}
