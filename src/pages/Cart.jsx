// src/pages/Cart.jsx
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
export default function Cart() {
 const navigate = useNavigate();
 const { items, totalPrice, removeItem, clearCart, addItem, decrementItem } = useCart();
 if (items.length === 0) {
 return (
 <div style={{ textAlign: 'center', padding: '4rem', minHeight: 'calc(100vh - 70px)', background: '#f0f7ff' }}>
 <h2 style={{ color: '#0a3e6f' }}>Keranjang Kosong</h2>
 <p style={{ color: '#4a5568' }}>Belum ada produk di keranjang Anda.</p>
 </div>
 );
 }
 return (
 <div style={{ padding: '1.5rem', width: '100%', margin: '0', background: '#f3f8ff', minHeight: 'calc(100vh - 70px)', boxSizing: 'border-box' }}>
 <h2 style={{ color: '#1d4b88', marginBottom: '1rem', textAlign: 'center', fontSize: '2rem' }}>Keranjang Belanja</h2>
 
 {items.map((item) => (
 <div key={item.id} style={{
 display: 'flex', alignItems: 'center', gap: '1rem',
 padding: '1rem', borderBottom: '1px solid rgba(15, 70, 135, 0.15)', borderRadius: '8px', background: 'white', marginBottom: '0.8rem', boxShadow: '0 3px 8px rgba(23,93,162,0.08)'
 }}>
 <img src={item.image} alt={item.title}
 style={{ width: '60px', height: '60px', objectFit: 'contain' }} />
 <div style={{ flex: 1 }}>
 <h4 style={{ margin: '0 0 0.25rem' }}>{item.title}</h4>
 <p style={{ margin: 0, color: '#666' }}>
 ${item.price.toFixed(2)} x {item.quantity}
 </p>
 </div>
 <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
 <button
 onClick={() => decrementItem(item.id)}
 style={{
 width: '32px', height: '32px', borderRadius: '6px',
 border: '1px solid #1f78d8', background: '#e3efff', color: '#1f78d8', fontWeight: 700,
 cursor: 'pointer', boxShadow: '0 1px 3px rgba(0,0,0,0.15)',
 }}
 >
 -
 </button>
 <span style={{ minWidth: '30px', textAlign: 'center', fontWeight: '600', color: '#1f3e6f' }}>{item.quantity}</span>
 <button
 onClick={() => addItem(item)}
 style={{
 width: '32px', height: '32px', borderRadius: '6px',
 border: '1px solid #1f78d8', background: '#1f78d8', color: 'white', fontWeight: 700,
 cursor: 'pointer', boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
 }}
 >
 +
 </button>
 </div>
 <p style={{ fontWeight: 'bold', width: '110px', textAlign: 'right' }}>
 ${(item.price * item.quantity).toFixed(2)}
 </p>
 <button onClick={() => removeItem(item.id)}
 style={{ background: '#e74c3c', color: 'white',
 border: 'none', padding: '0.5rem', borderRadius: '4px',
 cursor: 'pointer' }}>
 Hapus
 </button>
 </div>
 ))}
 <div style={{ marginTop: '1.5rem', textAlign: 'right' }}>
 <h3>Total: ${totalPrice.toFixed(2)}</h3>
 <button onClick={() => {
 const confirmCheckout = window.confirm('Yakin lanjut checkout?');
 if (confirmCheckout) {
 clearCart();
 alert('Checkout berhasil! Terima kasih sudah berbelanja.');
 navigate('/');
 }
 }} style={{
 padding: '0.75rem 2rem', background: '#27AE60',
 color: 'white', border: 'none', borderRadius: '4px',
 fontSize: '1rem', cursor: 'pointer',
 }}>
 Checkout
 </button>
 </div>
 </div>
 );
}
