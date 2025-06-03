// ProductList.jsx
import { useState } from "react";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import products from "../assets/products.json";
import { useCart } from "../context/CartContext";
import CartModal from "../components/CartModal";

const ProductList = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const { cart, addToCart } = useCart();

  const toggleCart = () => setCartOpen(!cartOpen);


  const handleAddToCart = (product) => {
    addToCart(product);
    setCartOpen(true);
  };

  return (
    <>
      <Navbar onCartClick={toggleCart} />

      <div
        style={{
          paddingTop: "80px",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "20px",
        }}
      >
        <section
          className="welcome-box"
          style={{
            position: "relative",
            height: "500px",
            borderRadius: "10px",
            overflow: "hidden",
            marginBottom: "40px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            textAlign: "center",
            backgroundImage: 'url("/ruta-de-tu-imagen.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0,0,0,0.5)",
              zIndex: 1,
            }}
          />
          <div style={{ position: "relative", zIndex: 2 }}>
            <h1>¡Bienvenido a nuestra tienda!</h1>
            <p>Desplázate hacia abajo para ver nuestra variedad de productos tecnologicos que tenemos para ti.</p>
          </div>
        </section>

        <div
          className="product-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: "20px",
          }}
        >
          {products.map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              onAddToCart={() => handleAddToCart(p)}
            />
          ))}
        </div>
      </div>

      {cartOpen && <CartModal onClose={toggleCart} />}
    </>
  );
};

export default ProductList;
