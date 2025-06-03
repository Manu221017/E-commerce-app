import { useState } from "react";

const Navbar = ({ onCartClick }) => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>Tienda de electronicos</div>
      <ul style={styles.navLinks}>
        <li><a href="#inicio" style={styles.link}>Inicio</a></li>
        <li><a href="#contacto" style={styles.link}>Contacto</a></li>
      </ul>
      <button onClick={onCartClick} style={styles.cartButton}>
        🛒 Carrito
      </button>
    </nav>
  );
};

const styles = {
  navbar: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    height: "60px",
    backgroundColor: "#333",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 20px",
    zIndex: 1000,
  },
  logo: {
    fontWeight: "bold",
    fontSize: "20px",
  },
  navLinks: {
    listStyle: "none",
    display: "flex",
    gap: "20px",
    margin: 0,
    padding: 0,
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "16px",
  },
  cartButton: {
    backgroundColor: "#ff6f61",
    border: "none",
    color: "white",
    padding: "8px 12px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default Navbar;
