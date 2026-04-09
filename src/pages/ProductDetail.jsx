// src/pages/ProductDetail.jsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductById } from "../services/api";
import { useCart } from "../context/CartContext";
import Loading from "../components/Loading";

export default function ProductDetail() {
  const { id } = useParams();
  const { addItem } = useCart();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const data = await getProductById(id);
        setProduct(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  if (loading) return <Loading />;
  if (!product) return <p>Produk tidak ditemukan</p>;

  return (
    <div style={{ padding: "2rem", maxWidth: "900px", margin: "0 auto" }}>
      <div style={{ display: "flex", gap: "2rem" }}>
        <img
          src={product.image}
          alt={product.title}
          style={{ width: "300px", objectFit: "contain" }}
        />

        <div>
          <h2>{product.title}</h2>
          <p style={{ color: "#666" }}>{product.category}</p>

          <h3 style={{ color: "#E67E22" }}>
            ${product.price.toFixed(2)}
          </h3>

          <p>{product.description}</p>

          <button
            onClick={() => addItem(product)}
            style={{
              padding: "0.75rem 1.5rem",
              background: "#27AE60",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer"
            }}
          >
            + Tambah ke Keranjang
          </button>
        </div>
      </div>
    </div>
  );
}