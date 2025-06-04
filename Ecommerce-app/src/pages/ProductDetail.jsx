import { useParams, Link } from "react-router-dom";
import products from "../assets/products.json";
import { useCart } from "../context/CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const { dispatch } = useCart();

  if (!product) return <p>Producto no encontrado.</p>;

  return (
    <div
      style={{
        padding: "100px 20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center"
      }}
    >
      <Link
        to="/"
        style={{
          display: "inline-block",
          marginBottom: "20px",
          padding: "8px 12px",
          backgroundColor: "#f0f0f0",
          color: "#333",
          textDecoration: "none",
          borderRadius: "5px",
          fontWeight: "bold"
        }}
      >
        ⬅ Volver
      </Link>

      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} style={{ width: "300px" }} />
      <p>Precio: Q{product.price.toFixed(2)}</p>
      <p>Descripción: {product.description || "Sin descripción."}</p>
    </div>
  );
};

export default ProductDetail;
