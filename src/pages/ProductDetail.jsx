// src/pages/ProductDetail.jsx
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductById } from '../services/api';
import { useCart } from '../context/CartContext';
import Loading from '../component/Loading';

export default function ProductDetail() {
 const { id } = useParams();
 const [product, setProduct] = useState(null);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);
 const { addItem } = useCart();

 useEffect(() => {
 async function fetchDetail() {
 try {
 setLoading(true);
 const data = await getProductById(id);
 setProduct(data);
 } catch (err) {
 setError(err.message);
 } finally {
 setLoading(false);
 }
 }
 fetchDetail();
 }, [id]);

 if (loading) return <Loading />;
 if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;
 if (!product) return <p>Produk tidak ditemukan.</p>;

 return (
 <div style={{ padding: '1.5rem', width: '100%', margin: '0', background: '#f3f8ff', minHeight: 'calc(100vh - 70px)', boxSizing: 'border-box' }}>
 <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
 <Link to='/' style={{ textDecoration: 'none', color: '#000', marginBottom: '1rem', display: 'inline-block' }}>
 {'<'} Kembali ke katalog
 </Link>
 <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
 <div style={{ flex: 1, minWidth: '280px' }}>
 <img
 src={product.image}
 alt={product.title}
 style={{ width: '100%', maxHeight: '400px', objectFit: 'contain', border: '1px solid #ddd', borderRadius: '8px' }}
 />
 </div>
 <div style={{ flex: 2, minWidth: '280px' }}>
 <h2 style={{ color: '#000' }}>{product.title}</h2>
 <p style={{ margin: '0.5rem 0', color: '#000' }}>
 {product.category}
 </p>
 <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
 ${product.price.toFixed(2)}
 </p>
 <p style={{ lineHeight: 1.5 }}>{product.description}</p>
 <button
 onClick={() => addItem(product)}
 style={{
 marginTop: '1rem',
 padding: '0.75rem 1.5rem',
 background: '#27ae60',
 color: 'white',
 border: 'none',
 borderRadius: '6px',
 cursor: 'pointer',
 }}
 >
 Tambahkan ke Keranjang
 </button>
 </div>
 </div>
 </div>
 </div>
 );
}
