import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function ProductCard({product}){

  const { addItem } = useCart();

  return(

    <div style={{
      border:"1px solid #ddd",
      padding:"1rem",
      borderRadius:"8px"
    }}>

      <img
        src={product.image}
        alt={product.title}
        style={{width:"100%",height:"200px",objectFit:"contain"}}
      />

      <h4>{product.title.substring(0,40)}</h4>

      <p>${product.price}</p>

      <div style={{display:"flex",gap:"5px"}}>

        <Link to={`/product/${product.id}`}>
          Detail
        </Link>

        <button onClick={()=>addItem(product)}>
          + Keranjang
        </button>

      </div>

    </div>

  );
}