import { useCart } from "../context/CartContext";
import dayjs from "dayjs";
import CheckoutForm from "../component/CheckoutForm";

export default function Cart() {
  const { items, totalPrice, removeItem, clearCart, increaseQty, decreaseQty } =
    useCart();

  const orderDate = dayjs().format("DD MMMM YYYY, HH:mm");

  if (items.length === 0) {
    return (
      <div style={{ textAlign: "center", padding: "3rem" }}>
        <h2>Keranjang Kosong</h2>
        <p>Belum ada produk di keranjang Anda.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: "2rem", maxWidth: "900px", margin: "0 auto" }}>
      <h2>Keranjang Belanja</h2>
      <p style={{ color: "#666", marginBottom: "1.5rem" }}>
        Tanggal Order: <strong>{orderDate}</strong>
      </p>

      {items.map((item) => (
        <div
          key={item.id}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            padding: "1rem",
            borderBottom: "1px solid #eee",
          }}
        >
          <img
            src={item.image}
            alt={item.title}
            style={{ width: "70px", height: "70px", objectFit: "contain" }}
          />

          <div style={{ flex: 1 }}>
            <h4 style={{ margin: "0 0 0.3rem" }}>{item.title}</h4>
            <p style={{ margin: 0, color: "#666" }}>
              ${item.price.toFixed(2)} x {item.quantity}
            </p>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <button
              onClick={() => decreaseQty(item.id)}
              style={{
                padding: "6px 10px",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              -
            </button>

            <span>{item.quantity}</span>

            <button
              onClick={() => increaseQty(item.id)}
              style={{
                padding: "6px 10px",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              +
            </button>
          </div>

          <p style={{ fontWeight: "bold", minWidth: "80px" }}>
            ${(item.price * item.quantity).toFixed(2)}
          </p>

          <button
            onClick={() => removeItem(item.id)}
            style={{
              background: "#e74c3c",
              color: "white",
              border: "none",
              padding: "0.5rem",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Hapus
          </button>
        </div>
      ))}

      <div style={{ marginTop: "1.5rem", textAlign: "right" }}>
        <h3>Total: ${totalPrice.toFixed(2)}</h3>
      </div>

      <CheckoutForm clearCart={clearCart} />
    </div>
  );
}
