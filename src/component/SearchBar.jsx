// src/component/SearchBar.jsx
import { useState } from 'react';

export default function SearchBar({ value, onSearch }) {
 const [query, setQuery] = useState(value || '');

 const handleChange = (e) => {
 const val = e.target.value;
 setQuery(val);
 onSearch(val);
 };

 return (
 <div style={{ marginBottom: '1.25rem', maxWidth: '760px', marginLeft: 'auto', marginRight: 'auto' }}>
 <div style={{ position: 'relative' }}>
 <input
 type='text'
 value={query}
 onChange={handleChange}
 placeholder='Cari produk berdasarkan nama...'
 style={{
 width: '100%',
 padding: '0.8rem 1.1rem',
 border: '1px solid #3c79d7',
 borderRadius: '10px',
 fontSize: '1rem',
 background: 'white',
 boxShadow: '0 3px 8px rgba(61, 110, 181, 0.15)',
 outline: 'none',
 color: '#0b3d76',
 }}
 />
 <span style={{
 position: 'absolute',
 top: '50%',
 right: '0.75rem',
 transform: 'translateY(-50%)',
 color: '#4679c4',
 fontWeight: 600,
 }}>
 🔍
 </span>
 </div>
 </div>
 );
}
