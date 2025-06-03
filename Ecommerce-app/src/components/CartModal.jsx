import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const CartModal = ({ onClose }) => {
  const { cart, increment, decrement, removeFromCart, total, clearCart } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    onClose();         // Opcional: cerrar el modal
    navigate("/cart"); 
  };

  return (
    <>
      <div
        onClick={onClose}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: "rgba(0,0,0,0.5)",
          zIndex: 1100,
          cursor: "pointer",
        }}
      />

      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "400px",
          maxHeight: "80vh",
          backgroundColor: "white",
          borderRadius: "8px",
          padding: "20px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
          zIndex: 1101,
          overflowY: "auto",
        }}
      >
        <button onClick={onClose} style={{ float: "right", fontSize: "18px", border: "none", background: "none", cursor: "pointer" }}>
          ×
        </button>
        <h2>Tu carrito</h2>
        {cart.length === 0 ? (
          <p>Tu carrito está vacío.</p>
        ) : (
          <>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {cart.map((item) => (
                <li key={item.id} style={{ marginBottom: "15px", borderBottom: "1px solid #eee", paddingBottom: "10px" }}>
                  <strong>{item.name}</strong> - ${item.price} x {item.quantity}
                  <div style={{ display: "flex", gap: "10px", marginTop: "5px" }}>
                    <button onClick={() => decrement(item.id)}>-</button>
                    <button onClick={() => increment(item.id)}>+</button>
                    <button onClick={() => removeFromCart(item.id)} style={{ marginLeft: "auto", color: "red" }}>Eliminar</button>
                  </div>
                </li>
              ))}
            </ul>
            <p><strong>Total:</strong> ${total.toFixed(2)}</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "20px" }}>
              <button
                onClick={handleCheckout}
                style={{ background: "#28a745", color: "white", padding: "10px", border: "none", borderRadius: "5px" }}
              >
                Finalizar compra
              </button>
              <button
                onClick={clearCart}
                style={{ background: "red", color: "white", padding: "10px", border: "none", borderRadius: "5px" }}
              >
                Vaciar carrito
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartModal;
