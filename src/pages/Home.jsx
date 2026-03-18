// src/pages/Home.jsx
import { useState, useEffect } from 'react';
import { getProducts, getCategories } from '../services/api';
import ProductCard from '../component/ProductCard';
import Loading from '../component/Loading';
import SearchBar from '../component/SearchBar';
export default function Home() {
 const [products, setProducts] = useState([]);
 const [categories, setCategories] = useState([]);
 const [selectedCategory, setSelectedCategory] = useState('all');
 const [searchTerm, setSearchTerm] = useState('');
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);
 useEffect(() => {
 async function fetchData() {
 try {
 setLoading(true);
 const [productsData, categoriesData] = await Promise.all([
 getProducts(),
 getCategories(),
 ]);

 setProducts(productsData);
 setCategories(categoriesData);
 } catch (err) {
 setError(err.message);
 } finally {
 setLoading(false);
 }
 }
 fetchData();
 }, []);
 const filteredProducts = products
 .filter((p) =>
 selectedCategory === 'all' ? true : p.category === selectedCategory
 )
 .filter((p) =>
 p.title.toLowerCase().includes(searchTerm.toLowerCase())
 );
 if (loading) return <Loading />;
 if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;
 return (
 <div style={{ padding: '1.5rem', minHeight: 'calc(100vh - 60px)', background: 'linear-gradient(180deg, #f7faff 0%, #e8f1ff 60%, #f1f6ff 100%)', width: '100%', boxSizing: 'border-box' }}>
 <h2 style={{ marginBottom: '1rem', color: '#0a74f6', fontSize: '2.5rem', textAlign: 'center', textShadow: '1px 1px 3px rgba(0,0,0,0.1)' }}>Katalog Produk</h2>
 <SearchBar value={searchTerm} onSearch={setSearchTerm} />
 {/* Filter Kategori */}
 <div style={{ marginBottom: '1.5rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap'
}}>
 <button
 onClick={() => setSelectedCategory('all')}
 style={{
 padding: '0.5rem 1rem',
 background: selectedCategory === 'all' ? '#1B4F72' : '#EBF5FB',
 color: selectedCategory === 'all' ? 'white' : '#1B4F72',
 border: 'none', borderRadius: '20px', cursor: 'pointer',
 }}
 >
 Semua
 </button>
 {categories.map((cat) => (
 <button
 key={cat}
 onClick={() => setSelectedCategory(cat)}
 style={{
 padding: '0.5rem 1rem',
 background: selectedCategory === cat ? '#1B4F72' : '#EBF5FB',
 color: selectedCategory === cat ? 'white' : '#1B4F72',
 border: 'none', borderRadius: '20px', cursor: 'pointer',
 textTransform: 'capitalize',
 }}
 >
 {cat}
 </button>
 ))}
 </div>
 {/* Grid Produk */}
 <div style={{
 display: 'grid',
 gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
 gap: '1.5rem',
 }}>
    {filteredProducts.map((product) => (
    <ProductCard key={product.id} product={product} />
      ))}
    </div>
 </div>
 );
}
