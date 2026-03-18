// src/components/ProductCard.jsx
// Komponen reusable untuk menampilkan produk
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
export default function ProductCard({ product }) {
 const { addItem } = useCart();
 return (
 <div style={{
 border: '1px solid #1f78d8',
 borderRadius: '12px',
 padding: '1rem',
 display: 'flex',
 flexDirection: 'column',
 height: '100%',
 background: 'linear-gradient(180deg, #f4f9ff 0%, #dceeff 100%)',
 boxShadow: '0 8px 18px rgba(31,120,216,0.16)',
 transition: 'transform 0.2s ease, box-shadow 0.2s ease',
 }}
 onMouseEnter={(e) => {
 e.currentTarget.style.transform = 'translateY(-4px)';
 e.currentTarget.style.boxShadow = '0 12px 28px rgba(31,120,216,0.3)';
 }}
 onMouseLeave={(e) => {
 e.currentTarget.style.transform = 'translateY(0)';
 e.currentTarget.style.boxShadow = '0 8px 18px rgba(31,120,216,0.16)';
 }}>
 <img
 src={product.image}
 alt={product.title}
 style={{ width: '100%', height: '200px', objectFit: 'contain' }}
 />
 <h3 style={{ fontSize: '0.9rem', margin: '0.5rem 0', flex: 1 }}>
 {product.title.substring(0, 50)}...
 </h3>
 <p style={{ fontWeight: 'bold', color: '#E67E22', fontSize: '1.1rem' }}>
 ${product.price.toFixed(2)}
 </p>
 <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
 <Link
 to={`/product/${product.id}`}
 style={{
 flex: 1, padding: '0.5rem', textAlign: 'center',
 background: '#EBF5FB', color: '#0b9cfc',
 borderRadius: '4px', textDecoration: 'none',
 }}
 >
 Detail
 </Link>
 <button
 onClick={() => addItem(product)}
 style={{
 flex: 1, padding: '0.5rem', background: '#27AE60',
 color: 'white', border: 'none', borderRadius: '4px',
 cursor: 'pointer',
 }}
 >
 + Keranjang
 </button>
 </div>
 </div>
 );
}
