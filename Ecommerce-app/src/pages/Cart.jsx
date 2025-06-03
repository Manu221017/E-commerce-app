import { useCart } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Cart = () => {
  const { cart, total, clearCart } = useCart();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleConfirmPurchase = () => {
    if (total > 999.99) {
      setError("El total excede el límite permitido de $999.99. Reduce productos para continuar.");
      return;
    }
    alert("¡Compra confirmada! Gracias por tu compra.");
    clearCart();
    navigate("/"); // Redirige al inicio
  };

  if (cart.length === 0) {
    return (
      <div style={{ padding: "100px 20px", textAlign: "center" }}>
        <h2>Tu carrito está vacío</h2>
        <Link to="/" style={{
          marginTop: "20px",
          display: "inline-block",
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "white",
          textDecoration: "none",
          borderRadius: "5px"
        }}>
          Volver a la tienda
        </Link>
      </div>
    );
  }

  return (
    <div style={{ padding: "100px 20px", maxWidth: "800px", margin: "0 auto" }}>
      <h2 style={{ textAlign: "center" }}>Resumen de tu compra</h2>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {cart.map((item) => (
          <li key={item.id} style={{
            borderBottom: "1px solid #ccc",
            padding: "10px 0",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}>
            <div>
              <strong>{item.name}</strong>
              <p>Precio: ${item.price} x {item.quantity}</p>
            </div>
            <p><strong>Total: ${item.price * item.quantity}</strong></p>
          </li>
        ))}
      </ul>

      <h3 style={{ textAlign: "right", marginTop: "20px" }}>
        Total a pagar: ${total.toFixed(2)}
      </h3>

      {error && (
        <p style={{ color: "red", textAlign: "center", marginTop: "10px" }}>{error}</p>
      )}

      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "30px" }}>
        <Link to="/" style={{
          padding: "10px 20px",
          backgroundColor: "#6c757d",
          color: "white",
          borderRadius: "5px",
          textDecoration: "none"
        }}>
          ← Seguir comprando
        </Link>

        <button
          onClick={handleConfirmPurchase}
          style={{
            padding: "10px 20px",
            backgroundColor: total > 999.99 ? "gray" : "#28a745",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: total > 999.99 ? "not-allowed" : "pointer"
          }}
          disabled={total > 999.99}
        >
          Confirmar compra
        </button>
      </div>
    </div>
  );
};

export default Cart;
