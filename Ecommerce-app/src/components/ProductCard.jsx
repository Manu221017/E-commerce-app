import { useState } from "react";
import { Link } from "react-router-dom";
import FavoriteButton from "./FavoriteButton";
import RatingStar from "./RatingStars";

const ProductCard = ({ product, onAddToCart }) => {
  const { id, name, price, image } = product;
  const [rating, setRating] = useState(0);

  return (
    <div
      className="product-card"
      style={{
        border: "1px solid #ddd",
        padding: "12px",
        borderRadius: "8px",
        textAlign: "center",
      }}
    >
      <Link to={`/product/${id}`}>
        <img
          src={image}
          alt={name}
          style={{ width: "100%", borderRadius: "8px" }}
        />
      </Link>

      <h3 style={{ margin: "10px 0" }}>{name}</h3>

      <p style={{ fontWeight: "bold" }}>Q{price.toFixed(2)}</p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          marginBottom: "10px",
        }}
      >
        <FavoriteButton />

        <div>
          {[1, 2, 3, 4, 5].map((star) => (
            <RatingStar
              key={star}
              filled={star <= rating}
              onClick={() => setRating(star)}
            />
          ))}
        </div>
      </div>

      <button
        style={{
          padding: "8px 16px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={() => {
          onAddToCart();
          alert(`Agregaste ${name} al carrito!`);
        }}
      >
        Agregar
      </button>
    </div>
  );
};

export default ProductCard;
